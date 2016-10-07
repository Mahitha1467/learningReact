'use strict'
import React, {Component} from "react";
export default class Search extends Component {
  render(){
    return <div id="Search" className = "search"><input type = "text" placeholder= "Search using keywords, urls or etc" className = "search-keyword"/>
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </div>
  }
}
