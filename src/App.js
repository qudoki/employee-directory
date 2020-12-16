// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import TableBody from "./components/TableBody";
import Container from "./components/Container";
import SearchForm from "./components/SearchForm";

function App() {
	return (
		<Router>
			<div className="App">
				<p className="heading">
					Type in a name to activate <code>search by name</code>. You can also click on any table heading to <code>sort by that category</code>.
				</p>
				<Container>
					<SearchForm />
					<TableBody />
					<Route exact path="/search" component={Search} />
				</Container>
			</div>
		</Router>
	);
}

export default App;
