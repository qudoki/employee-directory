import axios from "axios";

export default {
    searchByLastName: function() {
        return axios.get("")
    },
    // sortByAge: function() {
    //     return axios.get("")
    // },
    viewAll: function() {
        return axios.get("https://randomuser.me/api/?results=250&inc=name,location,email,dob,cell,picture&noinfo")
    }
};