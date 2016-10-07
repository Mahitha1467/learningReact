'use strict'
import React, {Component} from "react";

export default class Url extends Component {
  render(){
    return  <div  className = "url">
    <span className = "square-box" />
    <div className = "url-name">{this.props.title}</div>
    <i className="fa fa-circle-thin circle" aria-hidden="true"></i>
    <i className="fa fa-plus plus" aria-hidden="true"></i>
    <div className = "url-link">{this.props.link}</div>
    </div>;
    }
}
