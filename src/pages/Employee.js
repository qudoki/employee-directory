import React, { Component } from "react";
import API from "../utils/API";
import TableBody from "../components/TableBody";
import SearchForm from "../components/SearchForm";


class Employee extends Component {
	state = {
		search: "",
		employees: [],
		// handleFormSubmit: () => undefined
	};

	//When the component mounts, get a list of all available names and update this.state.employees
	componentDidMount() {
		API.viewAll()
			.then((res) => {
				let eData = res.data.results;
				let eArray = [];
				// console.log(eData);
				for (let i = 0; i < eData.length; i++) {
					let temp = {
						name: eData[i].name.first + " " + eData[i].name.last,
						location: eData[i].location.city + ", " + eData[i].location.state,
						email: eData[i].email,
						dob: eData[i].dob.date,
						mobile: eData[i].cell,
						photo: eData[i].picture.medium,
					};
					eArray.push(temp);
				}
				// console.log(eArray);
				this.setState({ employees: eArray });
			})
			.catch((err) => console.log(err));
	}
	// if value changed, set search to that
	handleInputChange = (event) => {
		this.setState({ search: event.target.value });
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		// API.viewAll()
		// 	.then((res) => {
		// 		let eData = res.data.results;
		// 		let eArray = [];
		// 		for (let i = 0; i < eData.length; i++) {
		// 			let temp = {
		// 				name: eData[i].name.first + " " + eData[i].name.last,
		// 				location: eData[i].location.city + ", " + eData[i].location.state,
		// 				email: eData[i].email,
		// 				dob: eData[i].dob.date,
		// 				mobile: eData[i].cell,
		// 				photo: eData[i].picture.medium,
		// 			};
		// 			eArray.push(temp);
				// }
				let filteredArray = API.filterByName(this.state.employees, this.state.search);
				this.setState({ employees: filteredArray });
			// })
			// .catch((err) => console.log(err));
	};

	// 		((res) => {
	// 			if (res.data.status === "error") {
	// 				throw new Error(res.data.results);
	// 			}
	// 			this.setState({ search: res.data.results, error: "" });
	// 		})
	// 		.catch((err) => this.setState({ error: err.results }));
	// };

	// render
	render() {
		return (
			<div>
				<SearchForm
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
				/>
				<TableBody employees={this.state.employees} />
			</div>
		);
	}
}

export default Employee;
