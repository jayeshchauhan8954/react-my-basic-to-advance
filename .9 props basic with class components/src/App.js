import React from 'react';
import './App.css';
import Students from './Students';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'Jayesh',
			email: 'Jayesh@gmail.com'
		};
	}
	updateName() {
		let newName = prompt('Give me you Name : ');
		this.setState({ name: newName });
	}
	updateEmail() {
		let newEmail = prompt('Give me you Email : ');
		this.setState({ email: newEmail });
	}

	render() {
		return (
			<div>
				hello world
				<div>
					<Students name={this.state.name} email={this.state.email} />
				</div>
				<div>
					<button onClick={() => this.updateName()}>Update name </button>
					<button onClick={() => this.updateEmail()}>Update email </button>
				</div>
			</div>
		);
	}
}

export default App;
