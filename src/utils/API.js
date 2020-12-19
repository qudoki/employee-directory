import axios from "axios";

// eslint-disable-next-line
export default {
	filterByName: function (employeesArray, name) {
		let output = employeesArray.filter((x) => {
            console.log(x.name);
            console.log(name);
            return x.name.toLowerCase() === name.toLowerCase()});
        console.log(output);
        return output;
	},
	// sortByAge: function() {
	//     return axios.get("")
	// },
	viewAll: function () {
		return axios.get(
			"https://randomuser.me/api/?results=100&nat=us&inc=name,location,email,dob,cell,picture&noinfo"
		);
	},
};
