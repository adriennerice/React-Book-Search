import React, { Component } from 'react';
import Header from "../components/Header";
import Book from "../components/Book";
import Results from "../components/Results";
import API from '../utils/API';


class SavedPage extends Component {
  state = {
    books: {}
  };
  
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res)
        this.setState({ books: res.data })})
      .catch(err => console.log(err));
  }
  
  handleClick = (props) => {
    console.log("Deleted")
    console.log(props.id)

    API.deleteBook(
      props.id
    )
    .then(res => {
      console.log(res)
      this.loadBooks()
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App container">
        <Header>
          <h1>(React) Google Books Search</h1>

          <h3>Save Books of Interest</h3>
        </Header>
        {!this.state.books.length ? (
          <h1 className="text-center">No Books to Display</h1>
        ) : (
        <Results>
          {this.state.books.map(book => {
            return (
              <Book
                key={book.googleId}
                title={book.title}
                subtitle={book.subtitle}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                id={book._id}
                handleClick={this.handleClick}
                clickType="Delete"
              />
            );
        })}
        </Results>
        )}
      </div>
    );
  }
}

export default SavedPage;