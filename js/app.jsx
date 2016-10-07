'use strict';
import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./quiz";
import Login from "./loginPage";
import * as webConfigure from "./webConfigure";
import FontAwesome from "react-fontawesome";

ReactDOM.render(<Quiz books = {["The Lord of The Rings", "Harry Potter", "Monk Who sold his Ferrari", "Some Other book names"]}/>,
	document.getElementById("container"));

ReactDOM.render(<Login />, document.getElementById("container"));
ReactDOM.render(<webConfigure.Header />, document.getElementById("container"));
ReactDOM.render(<webConfigure.ConfiguredSources />, document.getElementById("configuredSources"));
ReactDOM.render(<webConfigure.Search />, document.getElementById("search"));
ReactDOM.render(<webConfigure.WebSources />, document.getElementById("webSources"));
