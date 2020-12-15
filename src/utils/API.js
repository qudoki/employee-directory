import axios from "axios";

export default {
    searchByFirstName: function() {
        return axios.get("")
    },
    searchByLastName: function() {
        return axios.get("")
    },
    viewAll: function() {
        return axios.get("https://randomuser.me/api/?results=100")
    }
}