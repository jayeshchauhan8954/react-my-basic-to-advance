import React, { useState } from 'react';
import './App.css';

function App() {
	const [ status, setStatus ] = useState(true);
	const [ text, setText ] = useState('write here');

	function changeText() {
		let newText = prompt('write your text here : ');
		setText(newText);
	}
	return (
		<div>
			<div>
				{status ? (
					<h1>
						{text}
						<div>
							<button onClick={changeText}>change text</button>
						</div>
					</h1>
				) : null}
			</div>
			<div>
				<button onClick={() => setStatus(true)}>Show</button>
				<button onClick={() => setStatus(false)}>Hide</button>
			</div>
			<div>
				<button id="toggleBtn" onClick={() => setStatus(!status)}>
					Toggle
				</button>
			</div>
		</div>
	);
}

export default App;
