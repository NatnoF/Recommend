import React from 'react'
import SidebarMenu from '../components/SidebarMenu';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

function library() {
    return (
        <div className="app">
            <SidebarMenu />
            <Feed />
            <Widgets />
        </div>
    )
}

export default library;
