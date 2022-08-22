import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Add';
import About from './About/About';
import Login from './Auth/Login';
import Profile from './Auth/About';
import Blog from './Blog/Blog';
import Search from './Blog/Search';
import Detail from './Blog/Detail';
import axios from 'axios';
import Config from './Library/Config';
import { Redirect } from 'react-router-dom';


export default class Header extends Component {

	constructor(){
		super();
		this.state={
			user:{},
			loggedIn:false
		}
		this.logout = this.logout.bind(this);
		this.setUser = this.setUser.bind(this);
	}

	componentDidMount(){
		//login user credentials
		//alert('ammen korle kamne');
		if(localStorage.getItem('userdata')){
			axios.get(Config.base_url+'api/user/get')
			.then(res=>{
				this.setUser(res.data.result.user);
			});
		}
		
	}
	setUser=(user)=>{
		this.setState({user:user})
	}

	logout(){
		localStorage.clear();
		return window.location.href = '/login';
	}

	render(){
		let profile;
		let logauth;
		let logout;
		if(localStorage.getItem('userdata')){
			profile=(
				
					<li><Link exact to="/Profile" className="scroll">Profile</Link></li>
					
				)
			logout=(
				<li><Link className="scroll" onClick={this.logout}>Logout</Link></li>
				)
			
		}else{
			logauth=(
				<li><Link exact to="/Login" className="scroll">Login</Link></li>
			
			)
		}


		return(

			<Router user={this.state.user} setUser={this.setUser}>
				<nav id="tf-menu" className="navbar navbar-default navbar-fixed-top">
		        <div className="container">
		            
		            <div className="navbar-header">
		              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		                <span className="sr-only">Toggle navigation</span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		              </button>
		              <Link to="/" className="navbar-brand"><img src={ Config.base_url+'public/assets/img/logo.png' } /></Link>
		            </div>
		            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		              <ul className="nav navbar-nav navbar-right">
		                <li><Link to="/" className="scroll">Home</Link></li>
		                <li><Link to="/Contact" className="scroll">Contact</Link></li>
		                <li><Link to="/About" className="scroll">About</Link></li>
		                <li><Link to="/Blog" className="scroll">Blog</Link></li>
		                {profile}
		                {logout}
		                {logauth}
		            	
		              </ul>
		            </div>
		        </div>
	    	</nav>
	    	
	    	<Route exact='true' path='/' component={Home} />
	    	<Route path='/Contact' component={Contact} />
	    	<Route path='/About' component={About} />
	    	<Route exact path='/Blog' component={Blog} />
	    	<Route path='/Search/:id?' component={Search} />
	    	<Route path='/Profile' component={()=><Profile user={this.state.user} setUser={this.setUser} />} />
	    	<Route path='/Login' component={Login} />
	    	<Route path='/Detail' component={Detail} />
			</Router>
			);
	}
}