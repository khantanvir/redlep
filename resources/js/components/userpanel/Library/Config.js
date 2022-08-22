import React, { Component } from 'react';

export default class Config extends Component{
	static base_url = 'https://redlep.com/';

	static getStr(str = null) {
	  if (str === null) {
	    return false;
	  }
	  if (str.length > 166) {
	    var result = str.substring(0, 165)+'...';
	    return result;
	  }
	  return str;
	}
	//date function
	static getDate(str=null){
		if (str === null) {
	    return false;
	  }
	  var date = new Date(str * 1000);
	  var result = date.toUTCString();
	  return result;
	}
}