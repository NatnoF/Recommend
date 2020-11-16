import React from 'react'
import './Feed.css'
import {Icon} from '../SidebarMenu/SidebarMenuProperties';
import BookResults from '../BookResults';
import TextField from '@material-ui/core/TextField';


const Feed = () => {
    return (
        <div className="feed">
            <div className="feedHeader">
            <Icon to="/"> Recommend </Icon>
            <br />
            </div>
            <div className="search">
            <TextField id="standard-search" label="Search field" type="search"  /></div>
            <BookResults />

        </div>
    )
}

export default Feed;
