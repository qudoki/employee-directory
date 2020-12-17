import React, { Component } from "react";
import API from "../utils/API";
import TableBody from "../components/TableBody";

class Employee extends Component {
	state = {
		search: "",
		employees: []
	};

	//When the component mounts, get a list of all available names and update this.state.employees
	componentDidMount() {
		API.viewAll()
			.then(res => {
				let eData = res.data.results;
				let eArray = [];
				// console.log(eData);
			for (let i=0; i< eData.length; i++) {
				let temp = {
					name: eData[i].name.first + " " + eData[i].name.last,
					location: eData[i].location.city + ", " + eData[i].location.state,
					email: eData[i].email,
					dob: eData[i].dob.date,
					mobile: eData[i].cell,
					photo: eData[i].picture.medium
				};
				eArray.push(temp);
			}
			console.log(eArray);
				this.setState({ employees: eArray });
		})
			.catch((err) => console.log(err));
	}


	handleInputChange = (event) => {
		this.setState({ search: event.target.value });
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		API.searchByName(this.state.search)
			.then((res) => {
				if (res.data.status === "error") {
					throw new Error(res.data.results);
				}
				this.setState({ results: res.data.results, error: "" });
			})
			.catch((err) => this.setState({ error: err.results }));
	};

	// render
	render() {
		return (
			<div>
					<TableBody employees={this.state.employees} />
			</div>
		);
	}
}

export default Employee;
