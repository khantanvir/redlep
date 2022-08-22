import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Config from './../Library/Config';
import SimpleReactValidator from 'simple-react-validator';

export default class Add extends Component {

	constructor(){
		super();
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.state={
			email:'',
			password:'',
			message:''
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.validator = new SimpleReactValidator();
	}
	onChangeEmail(e){
		this.setState({
			email:e.target.value
		});
	}
	onChangePassword(e){
		this.setState({
			password:e.target.value
		});
	}
	onSubmit(e){
		if(this.validator.allValid()){
			e.preventDefault();
			const login = new FormData();
			login.append('email',this.state.email);
			login.append('password',this.state.password);
			axios.post(Config.base_url+'api/user/login',login)
			.then(res=>{
				if(res.data.result.key==='200'){
					localStorage.setItem('userdata',res.data.result.token);
					this.setState({
						loggedIn:true
					});
				}
				if(res.data.result.key==='101'){
					$('#info').show();
					$('#info').html(res.data.result.message);
					console.log(res.data.result.message);
				}
				
			});
		}else{
			e.preventDefault();
			this.validator.showMessages();
			this.forceUpdate();
		}
	}


	render(){
		if(localStorage.getItem('userdata') !== null){
			window.location.href = '/profile';
		}

		if(this.state.loggedIn){
			return window.location.href = '/profile';
		}

		return(
			<div>
			<div id="tf-header">
		        <div className="container">
		            <h1>Login Page</h1>
		            <ol className="breadcrumb">
		                <li><a href="">Home</a></li>
		                <li><a className="active">Login</a></li>
		            </ol>
		        </div>
		    </div>
			<div id="tf-contact" className="contact">

			        <div className="container">
			            <div className="section-header">
			                <h2>Admin Login<span className="highlight"><strong>Page</strong></span></h2>
			                <h5>We design and build functional and beautiful websites</h5>
			                <div className="fancy"><span><img src={Config.base_url+'public/assets/img/favicon.ico'} alt="..." /></span></div>
			            </div>
			            
			            <div className="row text-center">
			            <div className="col-md-2"></div>
			                <div className="col-md-6 col-md-offset-1">
			                	<div style={{display:"none"}} id="info" className="alert alert-danger">
								  <strong>Error!</strong> Indicates a dangerous or potentially negative action.
								</div>
			                     <form className="form" method="post" onSubmit={this.onSubmit}>
			                        
			                        <div className="form-group">
			                            <input type="email" id="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control" placeholder="Your Email *"  />
			                            {this.validator.message('email',this.state.email, 'required|min:10|max:64|email', {className:'text-danger'})}
			                            <p className="help-block text-danger"></p>
			                        </div>

			                        <div className="form-group">
			                            <input type="password" id="password" value={this.state.password} onChange={this.onChangePassword} className="form-control" placeholder="Your Password" />
			                            {this.validator.message('password',this.state.password,'required|min:6|max:24',{className:'text-danger'})}
			                            <p className="help-block text-danger"></p>
			                        </div>
			                        <button type="submit" className="btn btn-primary">Send Message</button>

			                    </form>
			                </div>
			                <div className="col-md-3"></div>

			            </div>

			        </div>

			    </div>
			    </div>

			);
	};
}