import React, { component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

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
        .then(res => this.setState({ names: res.data.message}))
        .catch(err => console.log(err));
	}
}
