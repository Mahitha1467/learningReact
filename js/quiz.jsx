'use strict';
import React, {Component} from "react";
import Book from "./book";

export default class Quiz extends Component {
	render () {
		return <div>
				{ this.props.books.map((book, key) => { return <Book key={ key } title={ book } /> }) }
			</div>;
	}
}
