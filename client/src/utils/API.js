import axios from "axios";

export default {
    //Gets All Books
    getBooks: function() {
        return axios.get("/api/books");
    },
    //Gets Books by ID
    getBook: function(id) {
        return axios.get("/api/books" + id);
    },
    //Deletes the book with given id
    deleteBook: function(id) {
        return axios.delete("/api/books" + id);
    },
    //Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};