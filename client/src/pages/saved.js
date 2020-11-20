import React from 'react'
import SidebarMenu from '../components/SidebarMenu';
import Saved from '../components/Saved';
import Grid from '@material-ui/core/Grid';
import "./css/book.css";

function saved() {
    return (
        <div className="grid background">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <SidebarMenu />
                    </Grid>
                    <Grid item xs={9}>
                    <Saved />
                    </Grid>
                </Grid>
            </div >
    )
}

export default saved;
