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
					<tr>
						<td>{props.employees[0].name}</td>
						{/* {props.results.employees.map((person) => (
						<td>{ person.name }</td>
						<td>{ props.results.employees.location}</td>
						<td>{ props.results.employees.email}</td>
						<td>{ props.results.employees.dob}</td>
						<td>{ props.results.employees.mobile}</td>
						<td>{ props.results.employees.photo}</td>
					))} */}
					</tr>
					<tr>
						<td>Test</td>
					</tr>
					<tr>
						<td>Test</td>
					</tr>
					<tr>
						<td>Test</td>
					</tr>
					<tr>
						<td>Test</td>
					</tr>
					<tr>
						<td>Test</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default TableBody;
