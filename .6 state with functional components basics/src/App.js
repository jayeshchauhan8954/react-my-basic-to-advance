import React, { useState } from 'react';
import './App.css';

function App() {
	const [ count, setCount ] = useState(0);

	function increment() {
		if (count === 100) {
			return;
		}
		setCount(count + 1);
	}
	function decrement() {
		if (count === 0) {
			return;
		}
		setCount(count - 1);
	}
	return (
		<div className="App">
			<div>
				<h1>{count}</h1>
			</div>
			<div>
				<button onClick={increment}>Increment</button>
			</div>
			<div>
				<button onClick={decrement}>Decrement</button>
			</div>
		</div>
	);
}

export default App;
