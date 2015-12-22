'use strict';
import React, {Component} from "react";
import Book from "./book";

export default class Quiz extends Component {
	render () {
		return <div>
				<Book title = {this.props.books[0]} />
				<Book title = {this.props.books[1]} />
				<Book title = {this.props.books[2]} />
			</div>;
	}
}
