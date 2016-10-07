'use strict'
import React, {Component} from "react";

 export default class Header extends Component {
  render(){
    return <div id= "Header" className = "header">
      <div id="Title" className = "title">Make<b>News</b></div>
      <div id = "Sources" className = "sources">
        <span id= "Website" className = "website"><i className="fa fa-globe"></i>Website</span>
        <span id="Facebook" className = "facebook"><i className="fa fa-facebook-official"></i>Facebook</span>
        <span id = "Twitter" className = "twitter"><i className="fa fa-twitter"></i>Twitter</span>
      </div>
    </div>;
  }
}
