import axios from "axios";
// add subject to query string to search all categories
export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get("/api/google", { params: { q: query }});
  }
};
