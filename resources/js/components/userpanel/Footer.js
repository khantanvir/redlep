import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Footer extends Component {
	render(){
		return(

			<div id="tf-footer">
		        <div className="container">
		           Copyright © All Rights Reserved 2021
		 
		            <ul className="list-inline social pull-right">
		                <li><a target={'_blank'} href={'https://www.facebook.com/redlep1/?ref=pages_you_manage'}><i className="fa fa-facebook"></i></a></li>
		                <li><a target={'_blank'} href={'https://www.linkedin.com/company/25031185'}><i className="fa fa-linkedin"></i></a></li>
		            </ul>
		        </div>
		    </div>
			);
	}
}