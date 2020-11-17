import React, { Component } from 'react'
import SidebarMenu from '../components/SidebarMenu';
import Feed from '../components/Feed';

class search extends Component() {
    state = {
        books: [],
        q: " "
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
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
