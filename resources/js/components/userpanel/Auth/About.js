import React, { Component } from 'react';
import Config from './../Library/Config';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export default class About extends Component {
	render(){
		if(localStorage.getItem('userdata') === null){
			return window.location.href = '/login';
		}
		
		return(
			
			<div>
			<div id="tf-header">
		        <div className="container">
		            <h1>Profile Page</h1>
		            <ol className="breadcrumb">
		                <li><a href="">Home</a></li>
		                <li><a className="active">Profile</a></li>
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
			            
			            

			            <div className="row">
			                <div className="col-md-10 col-md-offset-1">
			                    <div className="row">

			                        
			                        <div className="col-md-4">  
			                            <div className="contact-detail">
			                                <i className="fa fa-map-marker"></i>
			                                <h4>{(this.props.user.name)?this.props.user.name:''}</h4>
			                            </div>
			                        </div>
			                        
			                        <div className="col-md-4">
			                            <div className="contact-detail">
			                                <i className="fa fa-envelope-o"></i>
			                                <h4>{(this.props.user.email)?this.props.user.email:''}</h4>
			                            </div>
			                        </div>

			                        
			                        <div className="col-md-4">
			                            <div className="contact-detail">
			                                <i className="fa fa-phone"></i>
			                                <h4>+613 0000 0000</h4>
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