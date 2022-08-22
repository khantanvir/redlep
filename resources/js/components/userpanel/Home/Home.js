import React, { Component } from 'react';
import Config from './../Library/Config';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
	constructor(){
		super();
		this.state = {
			blogs:[],
		};
	}
	componentDidMount(){
		axios.get(Config.base_url+'api/get/blog')
		.then(res=>{
			this.setState({
				blogs:res.data.result.val
			});
		});
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

	hblogDetail(d){
		//alert($('#detailid'+d).data('id'));
		var val='';
		if($('#homedetailid'+d)!==''){
			val = $('#homedetailid'+d).data('id');
			//alert("1");
		}
		if($('#homeimgdetailid'+d)!==''){
			val = $('#homeimgdetailid'+d).data('id');
			//alert("2");
		}
		if($('#homerdetailid'+d)!==''){
			val = $('#homerdetailid'+d).data('id');
			//alert("3");
		}

		this.eraseCookie('blogurl');
		this.setCookie('blogurl',val,2);
		return window.location.href = "/Detail"; 
	}




	render(){
		return(
			<div>
				<div id="tf-home" className="app">
			        <div className="overlay">
			            <div className="container">
			                <div className="row">
			                    <div className="col-md-6">
			                        <div className="content-heading text-left">
			                            <h1 style={{color: "red"}}>Websites / Apps / Ecommerce</h1>
			                            <p className="lead">We create beautiful, innovative and  effective website & Mobile Apps.</p>
			                            <a href="#tf-works" className="scroll goto-btn text-uppercase">View Our Works</a>
			                        </div>
			                    </div>

			                    <div className="col-md-6">
			                        <div className="ipad-wrapper">
			                            
			                            <div className="app-wrap">
			                                <div id="owl-demo" className="owl-carousel owl-theme">
			                                  <div className="item"><img src={ Config.base_url+'public/assets/img/app/01.jpg' } alt="The Last of us" /></div>
			                                  <div className="item"><img src={ Config.base_url+'public/assets/img/app/02.jpg' } alt="GTA V" /></div>
			                                  <div className="item"><img src={ Config.base_url+'public/assets/img/app/03.jpg' } alt="Mirror Edge" /></div>
			                                </div>
			                            </div>

			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    <div id="tf-intro">
			        <div className="container">
			            <div className="row">

			                <div className="col-md-8 col-md-offset-2"> 
			                    <h2>Redlep</h2>
			                    <p>A software development company passionate about performance. More than 500 successful projects with partners across the globe: Europe, USA and Canada. 
								Depending on the size and complexity of a site the design and build time will usually be between two and four weeks, provided that all material is submitted promptly and in digital form.</p>
			                </div>
			                
			            </div>
			        </div>
			    </div>

			    <div id="tf-services">
			        <div className="container">

			            <div className="section-header">
			                <h2>What We Do With <span className="highlight"><strong>Love</strong></span></h2>
			                <h5>We design and build functional and beautiful websites</h5>
			                <div className="fancy"><span><img src={ Config.base_url+'public/assets/img/favicon.ico' } alt="..." /></span></div>
			            </div>

			            <div className="row">
			                
			                <div className="col-md-6 text-right">
			                    <div className="media service">
			                        <div className="media-body">
			                            <h4 className="media-heading">Web Development</h4>
			                            <p>We design, develop, support and host bespoke Web and ECommerce solutions for individuals or comapny.</p>
			                        </div>
			                        <div className="media-right media-middle">
			                            <i className="fa fa-venus-mars"></i>
			                        </div>
			                    </div>

			                    <div className="media service">
			                        <div className="media-body">
			                            <h4 className="media-heading">Graphics Design</h4>
			                            <p>Designing is the most essential part of images in today’s business world. Then you have ecommerce site or printings services for the growth of business then you must require images processing services to optimize your websites.</p>
			                        </div>
			                        <div className="media-right media-middle">
			                            <i className="fa fa-magic"></i>
			                        </div>
			                    </div>

			                    <div className="media service">
			                        <div className="media-body">
			                            <h4 className="media-heading">System Analysis</h4>
			                            <p>System analysis is one of the crucial systems that give an organized and wider perspective on understanding, analyzing, and creating systems to fulfil particular motives.</p>
			                        </div>
			                        <div className="media-right media-middle">
			                            <i className="fa fa-camera-retro"></i>
			                        </div>
			                    </div>
			                </div>

			                <div className="col-md-6">
			                    <div className="media service">
			                        <div className="media-left media-middle">
			                            <i className="fa fa-bicycle"></i>
			                        </div>
			                        <div className="media-body">
			                            <h4 className="media-heading">UI/UX Design</h4>
			                            <p>The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction.</p>
			                        </div>
			                    </div>

			                    <div className="media service">
			                        <div className="media-left media-middle">
			                            <i className="fa fa-android"></i>
			                        </div>
			                        <div className="media-body">
			                            <h4 className="media-heading">Application</h4>
			                            <p>The statistics are motivating for anyone who wishes to build or develop a mobile app. But before we jump to any conclusions, let’s understand the exact process for mobile app development.</p>
			                        </div>
			                    </div>

			                    <div className="media service">
			                        <div className="media-left media-middle">
			                            <i className="fa fa-line-chart"></i>
			                        </div>
			                        <div className="media-body">
			                            <h4 className="media-heading">SEO/Online Marketing</h4>
			                            <p>Submit Express provides you with a competitive landscape to identify key businesses in your space.</p>
			                        </div>
			                    </div>
			                </div>
			                
			            </div>

			        </div>
			    </div>

			    <div id="tf-about">
			        <div className="container">
			            <div className="section-header">
			                <h2>What To Know Us <span className="highlight"><strong>Better</strong></span></h2>
			                <h5><em>We design and build functional and beautiful websites</em></h5>
			                <div className="fancy"><img src={Config.base_url+'public/assets/img/favicon.ico'} alt="hj" /></div>
			            </div>
			        </div>

			        <div className="gray-bg">

			            <div className="container">
			                <div className="row">

			                    <div className="col-md-6">
			                        <div className="about-left-content text-center">
			                            <div className="img-wrap">
			                                <div className="profile-img">
			                                    <img src={ Config.base_url+'public/assets/img/portfolio_redlep.jpg'} className="img-responsive" alt="Image" />
			                                </div>
			                            </div>
			                            <h2><span className="small">Developing</span> Amazing Things <span className="small">with Passion since 2012.</span></h2>
			                        </div>
			                    </div>

			                    <div className="col-md-6">
			                        <div className="about-right-content">

			                            <h4><strong>Professional Profile</strong></h4>
			                            <p>Redlep is a premier web and mobile application development company. We have extensive experience in creating functional, large-scale, engaging mobile and responsive web designs. Our process helps to uncover the characteristics of your users by learning about their needs, wants, and limitations.</p>
			                            
			                            <div className="skills"> 
			                                <div className="skillset">
			                                    <p>UI/UX Design</p>
			                                    <div className="progress">
			                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
			                                            <span className="sr-only">90% Complete</span>
			                                        </div>
			                                    </div>
			                                </div>

			                                <div className="skillset">
			                                    <p>HTML5, CSS3, SEO</p>
			                                    <div className="progress">
			                                        <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
			                                            <span className="sr-only">85% Complete</span>
			                                        </div>
			                                    </div>
			                                </div>

			                                <div className="skillset">
			                                    <p>LARAVEL</p>
			                                    <div className="progress">
			                                        <div className="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={{width: "99%"}}>
			                                            <span className="sr-only">99% Complete</span>
			                                        </div>
			                                    </div>
			                                </div>

			                                <div className="skillset">
			                                    <p>REACTJS VUEJS</p>
			                                    <div className="progress">
			                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
			                                            <span className="sr-only">90% Complete</span>
			                                        </div>
			                                    </div>
			                                </div>

			                                <div className="skillset">
			                                    <p>ASP.NET</p>
			                                    <div className="progress">
			                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
			                                            <span className="sr-only">80% Complete</span>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div> 

			                        </div>
			                    </div>

			                </div>
			            </div>

			            <div id="tf-counter" className="text-center">
			                <div className="container">
			                    <div className="row">

			                        <div className="counter"> 

			                          <div className="col-xs-6 col-sm-4 col-md-2 col-md-2 col-md-offset-1 facts">
			                            <div className="count-box"> 
			                                <i className="fa fa-thumbs-up"></i>
			                                <h4 className="count">720</h4>
			                                <p className="small">Happy Customers</p>
			                            </div> 
			                          </div>

			                          <div className="col-xs-6 col-sm-4 col-md-2 facts">
			                            <div className="count-box">
			                              <i className="fa fa-user"></i>
			                              <h4 className="count">480</h4>
			                              <p className="small">People Donated</p>
			                            </div>
			                          </div>

			                          <div className="col-xs-6 col-sm-4 col-md-2 facts">
			                            <div className="count-box">
			                              <i className="fa fa-desktop"></i>
			                              <h4 className="count">1253</h4>
			                              <p className="small">People Participated</p>
			                            </div>
			                          </div>

			                          <div className="col-xs-6 col-sm-4 col-md-2 facts">
			                            <div className="count-box">
			                              <i className="fa fa-dollar"></i>
			                              <h4 className="count">4580</h4>
			                              <p className="small">Donation Collected</p>
			                            </div>
			                          </div>

			                          <div className="col-xs-6 col-sm-4 col-md-2 facts">
			                            <div className="count-box last">
			                              <i className="fa fa-line-chart"></i>
			                              <h4 className="count">12853</h4>
			                              <p className="small">Total Hits</p>
			                            </div>
			                          </div>

			                        </div>

			                      </div>
			                </div>
			            </div>

			        </div>
			    </div>
			    <div id="tf-features">

			        <div className="container">
			            <div className="section-header">
			                <h2>Great Products and <span className="highlight"><strong>Features</strong></span></h2>
			                <h5>We design and build functional and beautiful websites</h5>
			                <div className="fancy"><span><img src="img/favicon.ico" alt="" /></span></div>
			            </div>
			        </div>

			        <div id="feature" className="gray-bg">
			            <div className="container"> 
			                <div className="row" role="tabpanel">
			                    <div className="col-md-4 col-md-offset-1">

			                        <ul className="features nav nav-pills nav-stacked" role="tablist">
			                            <li role="presentation" className="active">
			                                <a href="#f1" aria-controls="f1" role="tab" data-toggle="tab">
			                                    <span className="fa fa-desktop"></span>
			                                    Website Development<small>Responsive Website</small>
			                                </a>
			                            </li>
			                            <li role="presentation">
			                                <a href="#f2" aria-controls="f2" role="tab" data-toggle="tab">
			                                    <span className="fa fa-pencil"></span>
			                                    Reactjs & Vuejs<br/><small>Upgrade Website</small>
			                                </a>
			                            </li>
			                            <li role="presentation">
			                                <a href="#f3" aria-controls="f3" role="tab" data-toggle="tab">
			                                    <span className="fa fa-space-shuttle"></span>
			                                    UI/UX<br/><small>Build Responsive Webapp</small>
			                                </a>
			                            </li>
			                            <li role="presentation">
			                                <a href="#f4" aria-controls="f4" role="tab" data-toggle="tab">
			                                    <span className="fa fa-automobile"></span>
			                                    Mobile Application<br/><small>IOS & Andriod</small>
			                                </a>
			                            </li>
			                            <li role="presentation">
			                                <a href="#f5" aria-controls="f5" role="tab" data-toggle="tab">
			                                    <span className="fa fa-institution"></span>
			                                    System Analysis<br/><small>Research every app</small>
			                                </a>
			                            </li>
			                        </ul>

			                    </div>

			                    <div className="col-md-6">
			                        
			                        <div className="tab-content features-content">
			                            <div role="tabpanel" className="tab-pane fade in active" id="f1">
			                                <h4>Website Development</h4>
			                                <p>We perform any sort of web development work with guaranteed quality and deliver the service with no delays. Ever wondered what it would be like to work from anywhere in the world, on your own time? As a web developer, you’ll have plenty of opportunities to work remotely.</p>
			                                <img src={ Config.base_url+'public/assets/img/tab01.png'} className="img-responsive" alt="cc" />
			                            </div>
			                            <div role="tabpanel" className="tab-pane fade" id="f2">
			                                <h4>Reactjs & Vuejs</h4>
			                                <p>React and the community, libraries, and patterns that surround it are very much a reaction (pun intended) to some of the most frustrating and prevalent issues that plague JavaScript applications as they grow in size and complexity. JavaScript was not designed for creating large applications; it was designed, famously, in just 10 days as a scripting language to add a modicum of interactivity to lifeless web pages..</p>
			                                <img src={ Config.base_url+'public/assets/img/tab02.png'} className="img-responsive" alt="oo" />
			                            </div>
			                            <div role="tabpanel" className="tab-pane fade" id="f3">
			                                <h4>Motion Graphics</h4>
			                                <p>A UX designer thinks about how the experience makes the user feel, and how easy it is for the user to accomplish their desired tasks. They also observe and conduct task analyses to see how users actually complete tasks in a user flow.</p>
			                                <img src={ Config.base_url+'public/assets/img/tab03.png'} className="img-responsive" alt="uu" />
			                            </div>
			                            <div role="tabpanel" className="tab-pane fade" id="f4">
			                                <h4>Mobile Application</h4>
			                                <p>The mobile app development industry is going through a transformative phase. With the advancement in micro-processing technologies, you will be able to run mobile applications on multiple platforms. For example, apps built for mobiles will run seamlessly on desktops in the coming years.</p>
			                                <img src={ Config.base_url+'public/assets/img/tab04.png'} className="img-responsive" alt="mm" />
			                            </div>
			                            <div role="tabpanel" className="tab-pane fade" id="f5">
			                                <h4>Relaible Company Analysis</h4>
			                                <p>It is a process of planning a new business system or replacing an existing system by defining its components or modules to satisfy the specific requirements. Before planning, you need to understand the old system thoroughly and determine how computers can best be used in order to operate efficiently.</p>
			                                <img src={ Config.base_url+'public/assets/img/tab05.png'} className="img-responsive" alt="op" />
			                            </div>
			                        </div>
			                    </div>

			                </div>
			            </div>
			        </div>
			    </div>

			    <div id="tf-works">
			        <div className="container">
			            <div className="section-header">
			                <h2>Our Work is <span className="highlight"><strong>Incredible</strong></span></h2>
			                <h5>We design and build functional and beautiful websites</h5>
			                <div className="fancy"><span><img src={Config.base_url+'public/assets/img/favicon.ico'} alt="cv" /></span></div>
			            </div>

			        </div>
			             <div id="itemsWork" className="row text-center">

			                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding brand others">
			                    <div className="box"> 
			                        <div className="hover-bg">
			                            <div className="hover-text off">
			                                <a title="Logo Identity Design" href={Config.base_url+'public/assets/img/portfolio/01@2x.jpg'} data-lightbox-gallery="gallery1" data-lightbox-hidpi={Config.base_url+'public/assets/img/portfolio/01@2x.jpg'}>
			                                    <i className="fa fa-expand"></i>
			                                </a>
			                                <a href={'#'}><i className="fa fa-chain"></i></a>
			                            </div> 
			                            <img src={Config.base_url+'public/assets/img/portfolio/01.jpg'} className="img-responsive" alt="Image" />
			                        </div>
			                    </div>
			                </div>

			                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding apps">
			                    <div className="box">
			                        <div className="hover-bg">
			                            <div className="hover-text off">
			                                <a title="Mobile Application" href={Config.base_url+'public/assets/img/portfolio/02@2x.jpg'} data-lightbox-gallery="gallery1" data-lightbox-hidpi={Config.base_url+'public/assets/img/portfolio/02@2x.jpg'}>
			                                    <i className="fa fa-expand"></i>
			                                </a>
			                                <a href={'#'}><i className="fa fa-chain"></i></a>
			                            </div>
			                            <img src={Config.base_url+'public/assets/img/portfolio/02.jpg'} className="img-responsive" alt="Image" />
			                        </div>
			                    </div>
			                </div>

			                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding others brand">
			                    <div className="box">
			                        <div className="hover-bg">
			                            <div className="hover-text off">
			                                <a title="Freedom Project #1" href={Config.base_url+'public/assets/img/portfolio/03@2x.jpg'} data-lightbox-gallery="gallery1" data-lightbox-hidpi={Config.base_url+'public/assets/img/portfolio/03@2x.jpg'}>
			                                    <i className="fa fa-expand"></i>
			                                </a>
			                                <a href={'#'}><i className="fa fa-chain"></i></a>
			                            </div>
			                            <img src={Config.base_url+'public/assets/img/portfolio/03.jpg'} className="img-responsive" alt="Image" />
			                        </div>
			                    </div>
			                </div>

			                <div className="col-xs-12 col-sm-6 co'}-md-3 col-lg-3 nopadding others web">
			                    <div className="box">
			                        <div className="hover-bg">
			                            <div className="hover-text off">
			                                <a title="Freedom Project #1" href={Config.base_url+'public/assets/img/portfolio/04@2x.jpg'} data-lightbox-gallery="gallery1" data-lightbox-hidpi={Config.base_url+'public/assets/img/portfolio/04@2x.jpg'}>
			                                    <i className="fa fa-expand"></i>
			                                </a>
			                                <a href={'#'}><i className="fa fa-chain"></i></a>
			                            </div>
			                            <img src={Config.base_url+'public/assets/img/portfolio/04.jpg'} className="img-responsive" alt="Image" />
			                        </div>
			                    </div>
			                </div> 

			                <div className="col-xs-12 col-sm-6 col-md-3 nopadding web others">
			                    <div className="box">
			                        <div className="hover-bg">
			                            <div className="hover-text off">
			                                <a title="Freedom Project #1" href={Config.base_url+'public/assets/img/portfolio/05@2x.jpg'} data-lightbox-gallery="gallery1" data-lightbox-hidpi={Config.base_url+'public/assets/img/portfolio/05@2x.jpg'}>
			                                    <i className="fa fa-expand"></i>
			                                </a>
			                                <a href={'#'}><i className="fa fa-chain"></i></a>
			                            </div>
			                            <img src={Config.base_url+'public/assets/img/portfolio/05.jpg'} className="img-responsive" alt="Image" />
			                        </div>
			                    </div>
			                </div> 

			                <div className="col-xs-12 col-sm-6 col-md-3 nopadding app">
			                    <div className="box">
			                        <div className="hover-bg">
			                            <div className="hover-text off">
			                                <a title="Freedom Project #1" href={Config.base_url+'public/assets/img/portfolio/06@2x.jpg'} data-lightbox-gallery="gallery1" data-lightbox-hidpi={Config.base_url+'public/assets/img/portfolio/06@2x.jpg'}>
			                                    <i className="fa fa-expand"></i>
			                                </a>
			                                <a href={'#'}><i className="fa fa-chain"></i></a>
			                            </div>
			                            <img src={Config.base_url+'public/assets/img/portfolio/06.jpg'} className="img-responsive" alt="Image" />
			                        </div>
			                    </div>
			                </div>

			                <div className="col-xs-12 col-sm-6 col-md-3 nopadding web brand">
			                    <div className="box">
			                        <div className="hover-bg">
			                            <div className="hover-text off">
			                                <a title="Freedom Project #1" href={Config.base_url+'public/assets/img/portfolio/07@2x.jpg'} data-lightbox-gallery="gallery1" data-lightbox-hidpi={Config.base_url+'public/assets/img/portfolio/07@2x.jpg'}>
			                                    <i className="fa fa-expand"></i>
			                                </a>
			                                <a href={'#'}><i className="fa fa-chain"></i></a>
			                            </div>
			                            <img src={Config.base_url+'public/assets/img/portfolio/07.jpg'} className="img-responsive" alt="Image" />
			                        </div>
			                    </div>
			                </div>

			                <div className="col-xs-12 col-sm-6 col-md-3 nopadding app">
			                    <div className="box"> 
			                        <div className="hover-bg">
			                            <div className="hover-text off">
			                                <a title="Freedom Project #1" href={Config.base_url+'public/assets/img/portfolio/08@2x.jpg'} data-lightbox-gallery="gallery1" data-lightbox-hidpi={Config.base_url+'public/assets/img/portfolio/08@2x.jpg'}>
			                                    <i className="fa fa-expand"></i>
			                                </a>
			                                <a href={'#'}><i className="fa fa-chain"></i></a>
			                            </div>
			                            <img src={Config.base_url+'public/assets/img/portfolio/08.jpg'} className="img-responsive" alt="Image" />
			                        </div> 
			                    </div>
			                </div>
			                
			            </div>

			        </div>
			        <div id="tf-process">
				        <div className="container">
				            <div className="section-header">
				                <h2>Our Best <span className="highlight"><strong>WorkFlow</strong></span></h2>
				                <h5><em>We design and build functional and beautiful websites</em></h5>
				                <div className="fancy"><span><img src={Config.base_url+'public/assets/img/favicon.ico'} alt="xc" /></span></div>
				            </div>
				        </div>
				        <div className="gray-bg">
				            <div className="container">
				                <div className="vline"></div>
				                <div id="process" className="row">

				                    <div className="col-md-10 col-md-offset-1">

				                        <div className="media process">
				                            <div className="media-right media-middle">
				                                <i className="fa fa-search-plus"></i>
				                            </div>
				                            <div className="media-body">
				                                <h4 className="media-heading">Research</h4>
				                                <p>Research websites come in handy in all kinds of situations, whether you're looking for the average rainfall in the Amazon rainforest, researching Roman history, or just having fun learning to find information. This list of the best research websites will help greatly, and most of them are updated daily with new information.</p>
				                            </div>
				                        </div>

				                        <div className="media process">
				                            <div className="media-right media-middle">
				                                <i className="fa fa-wrench"></i>
				                            </div>
				                            <div className="media-body">
				                                <h4 className="media-heading">Design and Develop</h4>
				                                <p>Every product group at ERIKS has very experienced Application Engineers standing by to give advice and to guide you through the prototyping and testing process. By working in this way, we contribute to the achievement of your ambition to quickly and successfully introduce new products or innovative power.</p>
				                            </div>
				                        </div>

				                        <div className="media process">
				                            <div className="media-right media-middle">
				                                <i className="fa fa-flask"></i>
				                            </div>
				                            <div className="media-body">
				                                <h4 className="media-heading">Testing and Refine</h4>
				                                <p>The software has shifted from process enablers to strategic differentiators. Accompanying this shift is the ever-increasing demand for software to be released faster. But software is complex. Therefore, the speed of development is positively associated with the risks of software defects. Software defects affect shareholder values. They translate into undesirable business risks.</p>
				                            </div>
				                        </div>

				                        <div className="media process">
				                            <div className="media-right media-middle">
				                                <i className="fa fa-truck"></i>
				                            </div>
				                            <div className="media-body">
				                                <h4 className="media-heading">Launch</h4>
				                                <p>Long and turbulent is the way from a startup idea to the first version of a software product launched on the market. But it’s quite possible to make this process as effective and painless as possible, especially if you have a software development partner, a team of experts that will build it for you.</p>
				                            </div>
				                        </div>
				                        
				                    </div>

				                </div>
				            </div>
				        </div>  
				    </div>
				    <div id="tf-blog">
			            <div className="container">
				            <div className="section-header">
				                <h2>Latest from the <span className="highlight"><strong>Blog</strong></span></h2>
				                <h5>We design and build functional and beautiful websites</h5>
				                <div className="fancy"><span><img src={Config.base_url+'public/assets/img/favicon.ico'} alt="nm" /></span></div>
				            </div>
				        </div>
				        <div id="blog-post" className="gray-bg">
			                <div className="row">
			                    <div className="col-md-12">

			                        {
			                        	this.state.blogs.map(blog=>{
			                        		return(


			                        <div className="post-wrap col-md-6">
			                            <div className="media post">
			                                <div className="media-left"> 
			                                    <a id={'homeimgdetailid'+blog.id} data-id={blog.url} onClick={this.hblogDetail.bind(this,blog.id)} href="javascript://">
			                                      <img className="media-object" src={Config.base_url+'public/assets/blog/main/'+blog.main_image} alt="ty" />
			                                    </a>
			                                </div>
			                                <div className="media-body">
			                                    <p className="small">{blog.time}</p>
			                                    <a id={'homedetailid'+blog.id} data-id={blog.url} onClick={this.hblogDetail.bind(this,blog.id)} href={'javascript://'}>
			                                        <h5 className="media-heading"><strong>{blog.title}</strong></h5>
			                                    </a>
			                                    <p>{Config.getStr(blog.description)}</p>
			                                </div>
			                            </div>
			                            
			                            <div className="post-meta">
			                                <ul className="list-inline metas pull-left">
			                                    <li><a href={'#'}>{blog.create_by}</a></li>
			                                    <li><a id={'homerdetailid'+blog.id} data-id={blog.url} onClick={this.hblogDetail.bind(this,blog.id)} href="#">Read More</a></li>
			                                </ul>
			                                <ul className="list-inline meta-detail pull-right">
			                                    <li><i className="fa fa-eye"></i> {blog.view}</li>
			                                </ul>
			                            </div> 
			                        </div>
			                        )
			                      })

			                    }
			                        

			                    </div>

			                    <div className="text-center loadmore">
				                    <a href={'Blog'} className="btn btn-primary tf-btn color">Load More</a>
				                </div> 
			                </div>          
			            
			          </div>

			       </div>

		    </div>
			);
	}
}