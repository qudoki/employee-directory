import axios from "axios";

// eslint-disable-next-line
export default {
    searchByName: function() {
        return axios.get("https://randomuser.me/api/?results=100&nat=us&inc=name,location,email,dob,cell,picture&noinfo")
    },
    // sortByAge: function() {
    //     return axios.get("")
    // },
    viewAll: function() {
        return axios.get("https://randomuser.me/api/?results=100&nat=us&inc=name,location,email,dob,cell,picture&noinfo")
    }
};