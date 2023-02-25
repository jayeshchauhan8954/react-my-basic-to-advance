import React, { createElement } from 'react';

export function User() {
	return (
		<div>
			hello this is user
			<div>10+12</div>
			<div>{10 + 12}</div>
			<div>end of user</div>
		</div>
	);
}
// the below work can be done via jsx easily
export function User1() {
	return createElement('div', null, 'hello user this is not jsx.');
}
export function User2() {
	return createElement('div', null, 'hello user this is not jsx.', createElement('h1', null, 'this is heading one'));
}
