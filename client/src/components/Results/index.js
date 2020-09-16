import React, { Component } from "react";

import API from "../../utils/API";

class Results extends Component {
  state = {
    bookList: [],
  };

  componentDidMount() {
    API.bookList()
      .then((bookList) => this.setState({ bookList: bookList }))
      .catch((err) => console.error(err));
  }

  handleSave = (book) => {
    if (this.state.bookList.map((book) => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then((deleteBook) =>
          this.setState({
            bookList: this.state.bookList.filter(
              (book) => book._id !== deleteBook._id
            ),
          })
        )
        .catch((err) => console.error(err));
    } else {
      API.saveBook(book)
        .then((bookList) =>
          this.setState({ bookList: this.state.bookList.concat([bookList]) })
        )
        .catch((err) => console.error(err));
    }
  };

  render() {
    return (
      <div>
        {!this.props.books.length ? (
          <h1 className="text-center">No Results</h1>
        ) : (
          <div>
            {this.props.books.map((result) => (
              <div className="card mb-3" key={result._id}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      alt={result.title}
                      className="img-fluid"
                      src={result.image}
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">
                        {result.title} by {result.authors}
                      </h5>
                      <p className="card-text">{result.description}</p>
                      <div>
                        <a
                          href={result.link}
                          className="btn btn-outline-dark mt-3"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Details
                        </a>
                        <button
                          onClick={() => this.handleSave(result)}
                          className="btn btn-outline-info mt-3 ml-3"
                        >
                          {this.state.bookList
                            .map((book) => book._id)
                            .includes(result._id)
                            ? "Unsave"
                            : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Results
