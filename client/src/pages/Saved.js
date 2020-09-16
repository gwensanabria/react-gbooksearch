import React, { Component } from 'react'
import API from '../utils/API'
import Results from '../components/Results'

class Saved extends Component {

    state = {
        bookList: []
    }

    componentDidMount() {
        API.bookList()
            .then(bookList => this.setState({ bookList: bookList }))
            .catch(err => console.log(err))
    }

    render() {
        return  (
            <div className='container'>
                <h2>Saved Books</h2>
                <Results books={this.state.bookList} />
            </div>
        )    
    }
    

}

export default Saved