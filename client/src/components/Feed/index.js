import React from 'react'
import './Feed.css'
import {Icon} from '../SidebarMenu/SidebarMenuProperties';
import BookResults from '../BookResults';
import TextField from '@material-ui/core/TextField';

const Feed = ({ handleInputChange, handleFormSubmit }) => {
    return (
        <div className="feed">
            <div className="feedHeader">
            <Icon to="/"> Recommend </Icon>
            <br />
            </div>
            <div className="search">
                <TextField id="standard-search" label="Search field" type="search" onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary float-right" onClick={handleFormSubmit}>
                    Search
                </button>
            </div>
            <BookResults />

        </div>
    )
}

export default Feed;
