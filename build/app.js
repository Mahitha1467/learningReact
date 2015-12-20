"use strict";

(function () {
	'use strict';

	var Quiz = React.createClass({
		displayName: "Quiz",

		render: function render() {
			return React.createElement(
				"div",
				null,
				"hello"
			);
		}
	});

	ReactDOM.render(React.createElement(Quiz, null), document.getElementById("container"));
})();