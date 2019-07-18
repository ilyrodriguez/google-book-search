import axios from "axios"

export default {
  searchBooks: (query) => {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  },
  getBooks: (id) => {
    return axios.get("api/books" + id);
  },
  addBookToDB: (bookData) => {
    return axios.post("/api/books", bookData);
  },
  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  }
};
