import axios from "axios";
//const keys = require("./keys")
// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getSearch: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+title+"+intitle");
  }
};
//:keyes&key="+keys.googleBooks.key