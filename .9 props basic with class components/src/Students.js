import React from 'react';

export default class Students extends React.Component {
	render() {
		return (
			<div>
				<h1>hello {this.props.name}</h1>
				<h2>hello {this.props.email}</h2>
			</div>
		);
	}
}
