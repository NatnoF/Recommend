import React from 'react'
import './Feed.css'
import {Icon} from '../SidebarMenu/SidebarMenuProperties';
import BookResults from '../BookResults';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedHeader">
            <Icon to="/"> Recommend </Icon>
            </div>

            <BookResults />

        </div>
    )
}

export default Feed;
