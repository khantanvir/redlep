import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Config from './../Library/Config';
import SimpleReactValidator from 'simple-react-validator';

export default class Add extends Component {
	constructor(){
		super();
		this.state={
			name:'',
			email:'',
			phone:'',
			message:''
		}
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
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
	onChangePhone(e){
		this.setState({
			phone:e.target.value
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
			const contact = new FormData();
			contact.append('name',this.state.name);
			contact.append('email',this.state.email);
			contact.append('phone',this.state.phone);
			contact.append('message',this.state.message);
			axios.post(Config.base_url+'api/user/contact',contact)
			.then(res=>{
				$('#info_msg').show();
				$('#info_msg').html(res.data.result.message);
				this.setState({
					name:"",
					email:"",
					phone:"",
					message:""
				});
			});

		}else{
			e.preventDefault();
			this.validator.showMessages();
			this.forceUpdate();
		}
	}
	

	render(){
		return(
			<div>
			<div id="tf-header">
		        <div className="container">
		            <h1>Contact Page</h1>
		            <ol className="breadcrumb">
		                <li><a href="">Home</a></li>
		                <li><a className="active">Contact</a></li>
		            </ol>
		        </div>
		    </div>
			<div id="tf-contact" className="contact">

			        <div className="container">
			            <div className="section-header">
			                <h2>Feel Free to <span className="highlight"><strong>Contact Us</strong></span></h2>
			                <h5>We design and build functional and beautiful websites</h5>
			                <div className="fancy"><span><img src={Config.base_url+'public/assets/img/favicon.ico'} alt="..." /></span></div>
			            </div>
			            
			            <div className="row text-center">
			            <div className="col-md-2"></div>
			                <div className="col-md-6 col-md-offset-1">
			                	<div style={{display:"none"}} className="alert alert-success" id="info_msg" role="alert">
								  
								</div>
			                     <form className="form" method="post" onSubmit={this.onSubmit}>
			                        <div className="form-group">
			                            <input type="name" id="name" value={this.state.name} onChange={this.onChangeName} className="form-control" placeholder="Your Name *"  />
			                            {this.validator.message('name',this.state.name, 'required|min:4|max:20', {className:'text-danger'})}
			                        </div>

			                        <div className="form-group">
			                            <input type="email" id="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control" placeholder="Your Email *" />
			                            {this.validator.message('email',this.state.email, 'required|min:4|max:60|email', {className:'text-danger'})}
			                        </div>

			                        <div className="form-group">
			                            <input type="text" id="phone" value={this.state.phone} onChange={this.onChangePhone} className="form-control" placeholder="Your Phone No. *" />
			                            {this.validator.message('phone',this.state.phone, 'required|min:4|max:20', {className:'text-danger'})}
			                        </div>

			                         
			                        <div className="form-group">
			                            <textarea className="form-control" id="message" rows="7" value={this.state.message} onChange={this.onChangeMessage} placeholder="Tell Us Something..." ></textarea>
			                            {this.validator.message('message',this.state.message, 'required|max:1200', {className:'text-danger'})}
			                            <div id="success"></div>
			                        </div>
			                        <button type="submit" className="btn btn-primary">Send Message</button>

			                    </form>
			                </div>
			                <div className="col-md-3"></div>

			            </div>

			            <div className="row">
			                <div className="col-md-10 col-md-offset-1">
			                    <div className="row">

			                        
			                        <div className="col-md-4">  
			                            <div className="contact-detail">
			                                <i className="fa fa-map-marker"></i>
			                                <h4>Redlep IT Barisal, Bangladesh</h4>
			                            </div>
			                        </div>
			                        
			                        <div className="col-md-4">
			                            <div className="contact-detail">
			                                <i className="fa fa-envelope-o"></i>
			                                <h4>info@redlep.com</h4>
			                            </div>
			                        </div>

			                        
			                        <div className="col-md-4">
			                            <div className="contact-detail">
			                                <i className="fa fa-phone"></i>
			                                <h4>+8801675842036</h4>
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