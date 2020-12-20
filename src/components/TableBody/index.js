import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css";

// tablebody will have search results see below
// function SearchResults(props) {
// 	return (
// 		<ul className="list-group search-results">
// {props.results.map((result) => (
// 	<li key={result} className="list-group-item">
// 		<img alt="Person" src={result} className="img-fluid" />
// 	</li>
// ))}
// 		</ul>
// 	);
// }

function TableBody(props) {
	return (
		<div className="table-body">
			{props.children}
			<Table striped bordered hover>
				<thead>
					{/* make these into links */}
					<tr>
						<th>Full Name</th>
						<th>Location</th>
						<th>Email</th>
						<th>DOB</th>
						<th>Mobile</th>
						<th>Photo</th>
					</tr>
				</thead>
				<tbody>
					{/* for each thing render a row with modified info */}
					{/* <td>{props.employees[0].name}</td> */}
					{props.employees.map((person) => (
						<tr>
							<td>{person.name}</td>
							<td>{person.location}</td>
							<td>{person.email}</td>
							<td>{person.dob}</td>
							<td>{person.mobile}</td>
							<td>
								<img src={person.photo} class="photo" alt="profile" />
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default TableBody;
