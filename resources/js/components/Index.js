import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './userpanel/Header';
import Footer from './userpanel/Footer';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('userdata');

export default class Index extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
            );
    }
}

if(document.getElementById('app')){
    ReactDOM.render(<Index />, document.getElementById('app'));
}

