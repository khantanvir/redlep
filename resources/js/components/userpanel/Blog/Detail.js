import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Config from './../Library/Config';
import SimpleReactValidator from 'simple-react-validator';
import Pagination from "react-js-pagination";
import ReactDOM from 'react-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default class Detail extends Component {
	constructor(){
		super();
		this.state={
			blogdetail:{},
			catagories:[],
			name:'',
			email:'',
			phone:'',
			message:'',
			count:'',
			commentsList:[]
		}
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeMessage = this.onChangeMessage.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.validator = new SimpleReactValidator();
	}
	onChangeName(e){
		this.setState({
			name:e.target.value
		});
	}
	onChangeEmail(e){
		this.setState({
			email:e.target.value
		});
	}
	onChangeMessage(e){
		this.setState({
			message:e.target.value
		});
	}
	onSubmit(e){
		if(this.validator.allValid()){
			e.preventDefault();
			const comment = new FormData();
			comment.append('name',this.state.name);
			comment.append('blog_url',$('#blog_url').val());
			comment.append('email',this.state.email);
			comment.append('message',this.state.message);
			axios.post(Config.base_url+'api/blog/comment',comment)
			.then(res=>{
				if(res.data.result.key==='101'){
					alert(res.data.result.val);
					return false;
				}
				if(res.data.result.key==='200'){
					this.setState({
						name:"",
						email:"",
						message:"",
						commentsList:res.data.result.comments,
						count:res.data.result.count
					});
				}
			});

		}else{
			e.preventDefault();
			this.validator.showMessages();
			this.forceUpdate();
		}
	}
	componentDidMount(){
		axios.get(Config.base_url+'api/get/blog/detail')
		.then(response=>{
			if(response.data.result.key==='101'){
				alert("Blog not found! Something went wrong");
				return false;
			}
			if(response.data.result.key==='200'){
				this.setState({
					catagories:response.data.result.catagories,
					blogdetail:response.data.result.val,
					commentsList:response.data.result.comments,
					count:response.data.result.count
				});
			}
			
		});
	}

	  searchByCatagory(x){
		  //alert($('#getData'+x).data('id'));
		  //sessionStorage.setItem('urldata',$('#getData'+x).data('id'));
		  this.setCookie('urldata',$('#getData'+x).data('id'),2);
		  return window.location.href = "/Search";
	  }
	  setCookie(cname,cvalue,exdays) {
		  const d = new Date();
		  d.setTime(d.getTime() + (exdays*24*60*60*1000));
		  let expires = "expires=" + d.toGMTString();
		  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}

	render(){
		return(
			<div>
				<div id="tf-header">
			        <div className="container">
			            <h1>Blog Detail Page</h1>
			            <ol className="breadcrumb">
			                <li><a href="#">Home</a></li>
			                <li><a href="#">Blog Detail</a></li>
			            </ol>
			        </div>
    			</div>
				    <div id="tf-blog" className="blog-post">
				        <div className="container">
				            <div className="section-header">
				                <h2>Latest from the <span className="highlight"><strong>Blog</strong></span></h2>
				                <h5>We design and build functional and beautiful websites</h5>
				                <div className="fancy"><span><img src={Config.base_url+'public/assets/img/favicon.ico'} alt=""/></span></div>
				            </div>
				        </div>

				        <div id="blog-post">
				            <div className="container">

				                <div className="row">
				                    <div className="col-md-8 col-md-offset-1">

				                        <div className="post-wrap">
				                            <p className="small">{Config.getDate(this.state.blogdetail.time)}</p>
				                            <a href="#">
				                                <h5 className="media-heading"><strong>{this.state.blogdetail.title}</strong></h5>
				                            </a>

				                            <ul className="list-inline metas pull-left">
				                                <li><a href="#">by {this.state.blogdetail.name}</a></li>
				                            </ul>

				                            <img src={Config.base_url+'public/assets/blog/'+this.state.blogdetail.detail_image} className="img-responsive" alt=""/>

				                            <p>{this.state.blogdetail.description}</p>
				                            <p>{ReactHtmlParser(this.state.blogdetail.long_description)}</p>

				                        </div>


				                        <div id="comments" className="comment">
				                            <h4 className="text-uppercase">Comment <span className="comments">({this.state.count})</span></h4>
				                            {
				                            	this.state.commentsList.map(comment=>{
				                            		return(
						                            <div className="media comment-block">
						                                <div className="media-left media-top">
						                                    <a href="#">
						                                      <img height="90px" width="90px" className="media-object" src={Config.base_url+comment.picture} alt="..." />
						                                    </a>
						                                </div>
						                                <div className="media-body">
						                                    <small className="pull-right">{Config.getDate(comment.time)}</small>
						                                    <h5 className="media-heading">Post by <a href="#">{comment.cname}</a></h5> 
						                                    <div className="clearfix"></div>
						                                    {comment.cmessage}
						                                    <div className="clearfix"></div>
						                                    
						                                </div>
						                            </div>
				                            	)

				                            })
				                        }
				                        </div>

				                        <div className="comment">
				                            <h4 className="text-uppercase">Leave a Comment</h4>
				                            <form id="contact-form" method="post" onSubmit={this.onSubmit} className="form">
				                            <input type="hidden" id="blog_url" name="blog_url" value={this.state.blogdetail.url} />
				                                <div className="row">
				                                    <div className="col-md-6">
				                                        <input type="text" id="name" value={this.state.name} onChange={this.onChangeName} className="form-control" placeholder="Your Name"/>
				                                        {this.validator.message('name',this.state.name, 'required|min:4|max:20', {className:'text-danger'})}
				                                    </div>
				                                    <div className="col-md-6">
				                                        <input type="text" id="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control" placeholder="Your Email"/>
				                                        {this.validator.message('email',this.state.email, 'required|min:4|max:60|email', {className:'text-danger'})}
				                                    </div>
				                                </div>
				                                <textarea id="message" className="form-control" value={this.state.message} onChange={this.onChangeMessage} rows="6" placeholder="Your Comment..."></textarea>
				                                {this.validator.message('message',this.state.message, 'required|max:1200', {className:'text-danger'})}
				                                <button type="submit" className="btn btn-default en-btn">Submit Comment</button>
				                            </form>
				                        </div>

				                    </div>

				                    <div className="col-md-3">
				                        <div className="sidebar">

				                            <div className="widget categories">
				                                <h4 className="text-uppercase">Category</h4>
				                                <ul className="list-unstyled bullet-lists">
				                                    {
					                                	this.state.catagories.map(catagory=>{
					                                		return(
					                                			<li><a id={'getData'+catagory.id} onClick={this.searchByCatagory.bind(this,catagory.id)} data-id={catagory.url} href="javascript://"><span className="fa fa-circle"></span>{catagory.title}</a></li>
					                                			)
					                                	})
					                                    
					                                }
				                                </ul>
				                            </div>

				                        </div>
				                    </div>

				                </div>
				                      
				            </div>
				        </div>
				    </div>
			</div>

			);
	};
}