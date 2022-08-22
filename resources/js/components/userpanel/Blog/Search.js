import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Config from './../Library/Config';
import SimpleReactValidator from 'simple-react-validator';
import Pagination from "react-js-pagination";


export default class Search extends Component {
	constructor(){
		super();
		this.state={
			catagories:[],
			blogs:[],
			activePage:1,
			itemsCountPerPage:1,
			totalItemsCount:1,
			pageRangeDisplayed:3
		}
		this.handlePageChange = this.handlePageChange.bind(this);

	}
	componentDidMount(){

		axios.get(Config.base_url+'api/search/blog/list')
		.then(response=>{
			this.setState({
				catagories:response.data.result.catagories,
				blogs:response.data.result.val.data,
				itemsCountPerPage:response.data.result.val.per_page,
				totalItemsCount:response.data.result.val.total,
				activePage:response.data.result.val.current_page
			});
			//console.log(res);
		});
	}
	handlePageChange(pageNumber) {
	    //console.log(`active page is ${pageNumber}`);
	    this.setState({activePage: pageNumber});
	    axios.get(Config.base_url+'api/search/blog/list?page='+pageNumber)
		.then(response=>{
			this.setState({
				blogs:response.data.result.val.data,
				itemsCountPerPage:response.data.result.val.per_page,
				totalItemsCount:response.data.result.val.total,
				activePage:response.data.result.val.current_page
			});
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
		eraseCookie(cname) {
            var d = new Date(); //Create an date object
            d.setTime(d.getTime() - (1000*60*60*24)); //Set the time to the past. 1000 milliseonds = 1 second
            var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
            window.document.cookie = cname+"="+"; "+expires;//Set the cookie with name and the expiration date
        }

		blogDetail(d){
			//alert($('#detailid'+d).data('id'));
			var val='';
			if($('#detailid'+d)!==''){
				val = $('#detailid'+d).data('id');
			}
			if($('#imgdetailid'+d)!==''){
				val = $('#imgdetailid'+d).data('id');
			}
			if($('#readdetailid'+d)!==''){
				val = $('#readdetailid'+d).data('id');
			}

			this.eraseCookie('blogurl');
			this.setCookie('blogurl',val,2);
			return window.location.href = "/Detail"; 
		}

	render(){
		return(
			<div>
				<div id="tf-header">
			        <div className="container">
			            <h1>Search</h1>
			            <ol className="breadcrumb">
			                <li><a href="/">Home</a></li>
			                <li><a className="active">Search By Catagory</a></li>
			            </ol>
			        </div>
		    	</div>

		    	<div id="tf-blog" className="blog">
			        <div className="container">
			            <div className="section-header">
			                <h2>Latest from the <span className="highlight"><strong>Blog</strong></span></h2>
			                <h5>We design and build functional and beautiful websites</h5>
			                <div className="fancy"><span><img src={Config.base_url+'public/assets/img/favicon.ico'} alt=""/></span></div>
			            </div>
			        </div>

			        <div id="blog-post">
			            <div className="container">
			            <Router>
			                <div className="row">
			                    <div className="col-md-8 col-md-offset-1">
			                    {
			                    	this.state.blogs.map(item=>{
			                    		return(
			                        <div className="post-wrap">
			                            <div className="media post">
			                                <div className="media-left"> 
			                                    <a id={'imgdetailid'+item.id} data-id={item.url} onClick={this.blogDetail.bind(this,item.id)} href="javascript://">
			                                      <img className="media-object" src={Config.base_url+'public/assets/blog/main/'+item.main_image} alt="..."/>
			                                    </a>
			                                </div>
			                                <div className="media-body">
			                                    <p className="small">{Config.getDate(item.time)}</p>
			                                    <a id={'detailid'+item.id} data-id={item.url} onClick={this.blogDetail.bind(this,item.id)} href="javascript://">
			                                        <h5 className="media-heading"><strong>{item.title}</strong></h5>
			                                    </a>
			                                    <p>{Config.getStr(item.description)}</p>
			                                </div>
			                            </div>
			                            
			                            <div className="post-meta">
			                                <ul className="list-inline metas pull-left">
			                                    <li><a href="#">by {item.name}</a></li>
			                                    <li><a id={'readdetailid'+item.id} data-id={item.url} onClick={this.blogDetail.bind(this,item.id)} href="javascript://">Read More</a></li>
			                                </ul>
			                                <ul className="list-inline meta-detail pull-right">
			                                    <li><i className="fa fa-eye"></i> {item.view}</li>
			                                </ul>
			                            </div> 
			                        </div>
			                        )

			                        })	

			                        }		                        

			                        <div className="text-left">
			                            <nav>
			                                <ul className="pagination">
			                                    <Pagination
										          activePage={this.state.activePage}
										          itemsCountPerPage={this.state.itemsCountPerPage}
										          totalItemsCount={this.state.totalItemsCount}
										          pageRangeDisplayed={this.state.pageRangeDisplayed}
										          onChange={this.handlePageChange}
										          itemClass='page-item'
										          linkClass='page-link'
										        />
			                                </ul>
			                            </nav>
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
			               </Router>   
			            </div>
			        </div>
			    </div>


			</div>

			);
	};
}