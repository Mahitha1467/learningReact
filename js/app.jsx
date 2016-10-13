'use strict';
import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./quiz";
import Login from "./loginPage";
import Header from "./header";
import ConfiguredSources from "./configuredSources";
import Search from "./searchBox";
import Sources from "./sources";
import FontAwesome from "react-fontawesome";

ReactDOM.render(<Quiz books = {["The Lord of The Rings", "Harry Potter", "Monk Who sold his Ferrari", "Some Other book names"]}/>,
	document.getElementById("container"));

ReactDOM.render(<Login />, document.getElementById("container"));
ReactDOM.render(<Header />, document.getElementById("container"));
ReactDOM.render(<Search />, document.getElementById("search"));
ReactDOM.render(<Sources />, document.getElementById("sources"));
ReactDOM.render(<ConfiguredSources />, document.getElementById("configuredSources"));
