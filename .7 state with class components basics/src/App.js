import React from 'react';
import './App.css';
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			count: 0
		};
	}

	increment() {
		if (this.state.count === 50) {
			return;
		}
		this.setState({
			count: this.state.count + 1
		});
	}
	decrement() {
		if (this.state.count === 0) {
			return;
		}
		this.setState({
			count: this.state.count - 1
		});
	}

	render() {
		return (
			<div className="App">
				<div>
					<h1>{this.state.count}</h1>
				</div>
				<div>
					<button onClick={() => this.increment()}>Increment</button>
				</div>
				<div>
					<button onClick={() => this.decrement()}>Decrement</button>
				</div>
			</div>
		);
	}
}

export default App;
