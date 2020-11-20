import React, { useState } from 'react'
import SidebarMenu from '../components/SidebarMenu';
import Feed from '../components/Feed';
import API from "../utils/API";
import Grid from '@material-ui/core/Grid';



function Search() {
    const [books, setBooks] = useState([]);
    const [q, setQ] = useState(" ");

    const handleInputChange = event => {
       setQ(event.target.value);
    };

    const getBooks = () => {
        API.getBooks(q)
        .then(res =>
            setBooks(res.data)
        )
        .catch(() => 
            setBooks([])
        );
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        getBooks();
    };

    return (
        <div className="grid">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                <SidebarMenu />
                </Grid>
                <Grid item xs={9}>
                <Feed handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} q={q} books={books} />
                </Grid>
            </Grid>
        </div >
    )
}

export default Search;
