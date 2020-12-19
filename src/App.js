// import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import Container from "./components/Container";

function App() {
	return (
		<div className="App">
			<Container>
				<p className="heading">
					Type in a name to activate <code>search by name</code>. You can also
					click on any table heading to <code>sort by that category</code>.
				</p>
				<Employee />
				
			</Container>
		</div>
	);
}

export default App;
