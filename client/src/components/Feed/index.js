import React from 'react'
import './Feed.css'
import {Icon} from '../SidebarMenu/SidebarMenuProperties';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedHeader">
            <Icon to="/"> Recommend </Icon>
            </div>
        </div>
    )
}

export default Feed;
