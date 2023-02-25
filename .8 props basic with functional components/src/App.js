import React from 'react';
import './App.css';
import Students from './Students';
import SetName from './SetName';
function App() {
	return (
		<div>
			<h1>Hello world</h1>
			<Students name="Jayesh" email={'jayesh@gmail.com'} other={{ address: 'Gulaothi', Ph_No: '#111111' }} />
			<Students name="Jitandra" email={'jitandra@gmail.com'} other={{ address: 'London', Ph_No: '#222222' }} />
			<Students name="Jaswant" email={'jaswant@gmail.com'} other={{ address: 'America', Ph_No: '#333333' }} />
			<div>
				<SetName />
			</div>
		</div>
	);
}

export default App;
