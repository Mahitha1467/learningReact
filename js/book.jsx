'use strict';
import React, {Component} from "react";

export default class Book extends Component {
	render() {
		return <div><h4 className = "text-success">{this.props.title}</h4></div>;
	}
}
