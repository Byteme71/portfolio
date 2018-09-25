import axios from "axios";

export default {

    getRandomFact: function () {
        return axios.get("https://geek-jokes.sameerkumar.website/api")
    }
};