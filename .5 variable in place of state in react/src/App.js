import React from 'react';
import './App.css';

function App() {
	let data = 'Jayesh Chauhan';
	function dataFunction() {
		data = 'jitandra chauhan';
		alert(data);
	}
	return (
		<div>
			<h1>{data}</h1>
			<button onClick={dataFunction()}>Click me</button>
			<button onClick={dataFunction}>Click me</button>
			<button onClick={() => dataFunction()}>Click me</button>
			<button onClick={() => dataFunction}>Click me</button>
		</div>
	);
}

export default App;
