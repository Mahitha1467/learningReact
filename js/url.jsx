'use strict'
import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class Url extends Component {
  render(){
    return  <div  className = "url">
              <span className = "square-box" />
              <div className = "url-name">{this.props.title}</div>

              <div className = "add-to-configured-url" id={this.props.key}>

                <i className="fa fa-circle-thin circle" aria-hidden="true"></i>
                {this.props.isConfigured ? <i className="fa fa-check tick" aria-hidden="true"></i> :
                <i className="fa fa-plus plus" aria-hidden="true" onClick = {() => this.props.addUrl(this.props.title)}></i>}
              </div>
    <div className = "url-link">{this.props.link}</div>
    </div>;
    }
}
