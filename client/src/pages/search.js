import React, { Component } from 'react'
import SidebarMenu from '../components/SidebarMenu';
import Feed from '../components/Feed';
import API from "../utils/API";

class search extends Component() {
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

    render() {
        return (
            <div className="app">
                <SidebarMenu />
                <Feed />
            </div>
        )
    }
}

export default search;
