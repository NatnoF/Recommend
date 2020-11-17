import React from 'react'
import SidebarMenu from '../components/SidebarMenu';
import Feed from '../components/Feed';

function search() {
    return (
        <div className="app">
            <SidebarMenu />
            <Feed />
        </div>
    )
}

export default search;
