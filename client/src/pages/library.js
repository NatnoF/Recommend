import React from 'react'
import SidebarMenu from '../components/SidebarMenu';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import Container from '@material-ui/core/Container';

function library() {
    return (

        <div className="app">
            <SidebarMenu />
            <Feed />
            

            {/* <Widgets /> */}
        </div>
    )
}

export default library;
