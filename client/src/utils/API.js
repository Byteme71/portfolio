// import axios from "axios";

// export default {

//   saveContact: function(contactData) {
//     return axios.post("/api/contact", contactData);
//   }
// };

import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
