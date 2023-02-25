import React, { Component } from 'react';
import './App.css';
// this type of import doesn't required {} object type
import ClassComp from './ClassCom';
// this is bulk import and it should be imported in object type
import { BulkClassComp1, BulkClassComp2, BulkClassComp3 } from './BulkClassComp';
function App() {

	function AnotheFunctionComp() {
		return(<div>This is my function component inside another component</div>)
	}
	return (
		<div>
			hello world
			<div>
				<ClassComp />
			</div>
			<div>
				<BulkClassComp1 />
				<BulkClassComp2 />
				<BulkClassComp3 />
			</div>
			<div>
				<ClassCompInSameFile/>
			</div>
			<div>
				<AnotheFunctionComp/>
			</div>
			<div>
				{AnotheFunctionComp()} with another type
				<div>We can call our components as this form.</div>
			</div>
		</div>
	);
}

class ClassCompInSameFile extends Component{
	render() {
		return (
			<>
			<div>This component is in the same file</div>
			<div>Thanks for reading.</div>
			</>
		)
	}
}

export default App;

// what is the alternative of npm?
// the alternative of npm is yarn.
// yarm pagage manager is created and maintained by facebook itself.
