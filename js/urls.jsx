'use strict'
import React, {Component} from "react";
import ConfiguredSources from "./configuredSources";
import LeftPanelUrl from "./leftPanelUrl";
import ReactDOM from "react-dom";

export default class Url extends Component {
  constructor(){
    super();
    this.name;
  }
  render(){
    return  <div  className = "url">
    <span className = "square-box" />
    <div className = "url-name">{this.props.title}</div>
    <div className = "add-to-configured-url" onClick = {this._handleClick.bind(this)}>
      <i className="fa fa-circle-thin circle" aria-hidden="true"></i>
      <i className="fa fa-plus plus" aria-hidden="true"></i>
    </div>
    <div className = "url-link">{this.props.link}</div>
    </div>;
    }

    _handleClick(event){
      event.preventDefault();
      let url=$($(event.target)[0].parentNode)[0].previousSibling.innerHTML;
      ReactDOM.render(<ConfiguredSources url = {url}/>, document.getElementById("configuredSources"));
    }
}
