import React from 'react';
import './App.css';
// this type of import doesn't required {} object type
import User from './User';
// this is bulk import and it should be imported in object type
import { AnotherUser1, AnotherUser2 } from './AnotherUser';
function App() {
	return (
		<div>
			hello world<div>
				<User />
				<User />
				<User />
			</div>
			<div>
				<AnotherUser1 />
				<AnotherUser2 />
			</div>
			<div>
				<ThanksMsg />
			</div>
		</div>
	);
}

function ThanksMsg() {
	return <div>Thanks for reading.</div>;
}

export default App;

// what is the alternative of npm?
// the alternative of npm is yarn.
// yarm pagage manager is created and maintained by facebook itself.
