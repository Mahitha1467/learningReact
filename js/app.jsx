'use strict';
import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./quiz";

ReactDOM.render(<Quiz books = {["The Lord of The Rings", "Harry Potter", "Monk Who sold his Ferrari"]}/>, 
	document.getElementById("container"));