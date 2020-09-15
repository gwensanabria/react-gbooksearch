import axios from 'axios'

export default {

    getBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    // deletes books by id
    deleteBook: function(id) {
        return axios.delete('/api/books' + id).then(result => result.data)
    },

    //saves book
    saveBook: function(bookData) {
        return axios.post('/api/books', bookData).then(result => result.data)
    },

    //get saved books
    bookList: function() {
        return axios.get('/api/books').then(result => result.data)
    }
}