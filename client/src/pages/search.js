import React, { Component } from 'react'
import SidebarMenu from '../components/SidebarMenu';
import Feed from '../components/Feed';
import API from "../utils/API";

class search extends Component {
    state = {
        books: [],
        q: " ",
        message: "Search For A Book To Begin!"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
        .then(res => 
            this.setState({
                books: res.data
            })
        )
        .catch(() => 
            this.setState({
                books: [],
                message: "No New Books Found, Try a Different Query"
            })
        );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
    
        API.saveBook({
          googleId: book.id,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          link: book.volumeInfo.infoLink,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail
          // userId: this.userId    Will actually get about doing this when users and authentication is added
        }).then(() => this.getBooks());
    };

    render() {
        return (
            <div className="app">
                <SidebarMenu />
                <Feed handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
            </div>
        )
    }
}

export default search;
