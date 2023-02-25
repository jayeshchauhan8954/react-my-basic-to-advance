import React, { useState } from 'react';

function SetName() {
	const [ userName, setUserName ] = useState('put you name to update');
	// props.name = userName;
	function updateUserName() {
		let newUserName = prompt('Give me user name : ');
		setUserName(newUserName);
	}
	return (
		<div>
			<h3>{userName}</h3>
			<button onClick={() => updateUserName()}>Update name</button>
		</div>
	);
}
export default SetName;
