import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class About extends Component {
	render(){
		return(
			<div>
				<div id="tf-header">
		        <div className="container">
		            <h1>About Us</h1>
		            <ol className="breadcrumb">
		                <li><a href="">Home</a></li>
		                <li><a className="active">About</a></li>
		            </ol>
		        </div>
		    </div>

		    <div id="tf-contact" className="contact">
		    <div className="container">
		    <div className="row">
		    	<div className="col-md-12">
			        <p>Welcome To Redlep</p>
			        <p>
			        Redlep is a Professional Software Company Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Software Company with a focus on dependability and Outsourching.
			        </p>
			        <p>We're working to turn our passion for Software Company into a booming online website. We hope you enjoy our Software Company as much as we enjoy offering them to you.

I will keep posting more important posts on my Website for all of you.</p>
					<p>At Redlep, we have always put our client first. This idea permeates our culture to its core. It has driven us to create the innovative products and services we offer today. As a result, we enable our clients to put their people first-helping them build the people-centric environments they need to grow and meet their business goals.</p>
					<p>We believe software should work for people. Not the other way around. Customers choose us for our sophisticated people management technology delivered in the cloud. But we know that it's the results-how well we improve the personal work experience for you and your employees-that matter most.

We execute every project with persistent accountability. We listen to your goals. We develop strategies based on your business. We track our performance. We do everything we can to earn your trust and build great lasting relationships.</p>

					<p>
					Redlep Technologies' mission is to become a market leader by consistently exceeding our Customer's expectations; providing them with best of breed technology solutions like business management system, any kind of software solutions, web development etc.

We will continually communicate with, and learn from our Customers, in order to improve our products and services. And, we will keep on top of today's and tomorrow's technology, no matter how fast it moves, to ensure our customers always have the best tools/solutions available to them with efficient cost and due time.
					</p>
					</div>
			    </div>
			    </div>
</div>

			</div>
			);
	};
}