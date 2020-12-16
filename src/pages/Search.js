import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import TableBody from "../components/TableBody";

class Search extends Component {
	state = {
		search: "",
		names: [],
		results: [],
		error: "",
	};

	//When the component mounts, get a list of all available names and update this.state.names
	componentDidMount() {
		API.viewAll()
		//changed below from names to results
			.then((res) => this.setState({ results: res.data.message }))
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
					throw new Error(res.data.message);
				}
				this.setState({ results: res.data.message, error: "" });
			})
			.catch((err) => this.setState({ error: err.message }));
	};

	// render
	render() {
		return (
			<div>
				<Container style={{ minHeight: "80%" }}>
					<h1 className="text-center">Search By Last Name!</h1>
					<SearchForm
						handleFormSubmit={this.handleFormSubmit}
						handleInputChange={this.handleInputChange}
						names={this.state.names}
					/>
					<TableBody results={this.state.results} />
				</Container>
			</div>
		);
	}
}

export default Search;
