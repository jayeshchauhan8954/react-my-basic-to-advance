function Students(props) {
	return (
		<div className="students" style={{ backgroundColor: 'red', margin: 10 }}>
			<h1>Hello {props.name}</h1>
			<h2>Email : {props.email}</h2>
			<h3>Phone Number : {props.other.Ph_No}</h3>
			<h4>Address : {props.other.address}</h4>
		</div>
	);
}

export default Students;
