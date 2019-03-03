import React, { Component } from 'react';

import Header from "../components/Header";
import Book from "../components/Book";
import Results from "../components/Results";
import Google from "../utils/APIGoogle";
import API from '../utils/API';


class SearchPage extends Component {
  state = {
    books: [],
    searchBar: "",
  };

  loadBooks = () => {
    Google.getBooks()
      .then(res =>
        {
          console.log(res)
          this.setState({ books: res.data })
          console.log(this.state.books)
        }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    console.log(`Search Bar State: ${ this.state.searchBar }`)
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log("Handle form submit");

    if (this.state.searchBar) {
      console.log(this.state.searchBar.trim())
      Google.getBooks({
        query: this.state.searchBar,
      })
        .then(res => 
          {
            console.log(res)
            this.setState({ books: res.data })
          })
        .catch(err => console.log(err));
    }
  };

  handleClick = (props) => {
    console.log("Saved")
    API.saveBook({
      title: props.title,
      subtitle: props.subtitle,
      authors: props.authors,
      link: props.link,
      description: props.description,
      image: props.image,
      googleId: props.id
    })
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

          <h3>Search for and Save Books of Interest</h3>
        </Header>

        <h3>Book Search</h3><br></br>
        <form>
          <h5>Book</h5>
          <input 
            type="text" 
            onChange={this.handleInputChange}
            name="searchBar"
            placeholder="Book Title" />
          <button
            onClick={this.handleFormSubmit}>
            Search
          </button>
        </form>
        <hr />
        {!this.state.books.length ? (
          <h1 className="text-center">No Books to Display</h1>
        ) : (
        <Results>
          {this.state.books.map(book => {
            return (
              <Book
                key={book.id}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.canonicalVolumeLink}
                id={book.id}
                handleClick={this.handleClick}
                clickType="Save"
              />
            );
        })}
        </Results>
        )}
      </div>
    );
  }
}

export default SearchPage;