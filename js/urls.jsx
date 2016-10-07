'use strict'
import React, {Component} from "react";

export default class Url extends Component {
  render(){
    return  <div  className = "url">
    <span className = "square-box" />
    <div className = "url-name">{this.props.title}</div>
    <div className = "url-click" onClick = {this._addUrl.bind(this)}>
      <i className="fa fa-circle-thin circle" aria-hidden="true"></i>
      <i className="fa fa-plus plus" aria-hidden="true"></i>
    </div>
    <div className = "url-link">{this.props.link}</div>
    </div>;
    }

    _addUrl(event){
      console.log("hello");
      console.log($($(event.target)[0].parentNode)[0].previousSibling.innerHTML);

    }
}
