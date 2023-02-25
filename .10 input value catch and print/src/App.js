import React, { useState } from 'react';
import './App.css';

function App() {
	const [ data, setData ] = useState(null);
	const [ print, setPrint ] = useState(false);

	function getData(el) {
		console.log(el.target.value);
		setData(el.target.value);
		setPrint(false);
	}
	return (
		<div className="App">
			<h1>Get Input box value !</h1>
			{print ? <h2>{data}</h2> : null}
			<input type="text" onChange={getData} />

			<button onClick={() => setPrint(true)}>Show Data</button>
		</div>
	);
}

export default App;
