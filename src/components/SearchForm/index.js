import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
	return (
		<form className="search">
			<div className="form-group">
				<input
					value={props.search}
					onChange={props.handleInputChange}
					name="employee"
					list="employees"
					type="text"
					className="form-whole"
					placeholder="Start typing a name to begin"
					id="employee"
				/>
				<datalist id="employees">
					{props.employees.map(employee => (
						<option value={employee.name} key={props.employees.name} />
					))}
				</datalist>
				<button
					type="submit"
					onClick={props.handleFormSubmit}
					className="btn btn-warning"
				>
					Search
				</button>
			</div>
		</form>
	);
}

export default SearchForm;
