import React from 'react'
import SidebarMenu from '../components/SidebarMenu';
import Saved from '../components/Saved';

function saved() {
    return (
        <div className="app">
            <SidebarMenu />
            <Saved />
        </div>
    )
}

export default saved;
