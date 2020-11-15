import React from 'react';
import './SidebarMenu.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SidebarOption from './SidebarOption';
import NotesIcon from '@material-ui/icons/Notes';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import Button from '@material-ui/core/Button';


const SidebarMenu = () => {
    return (
            <div className="sidebar">
                <MenuBookIcon className="sidebar__logoIcon" />
                <SidebarOption active Icon={LocationSearchingIcon} text="Find"/>
                <SidebarOption Icon={NotesIcon} text="Wishlist"/>
                <SidebarOption Icon={NotesIcon} text="My Reviews"/>
                <SidebarOption Icon={NotesIcon} text="Following"/>
                <SidebarOption Icon={NotesIcon} text="Favorite Genres"/>
                <SidebarOption Icon={NotesIcon} text="Favorite Genres"/>
                <SidebarOption Icon={NotesIcon} text="Favorite Genres"/>

                <Button variant="outlined" className="sidebar__button" fullWidth>Placeholder</Button>            
                </div>
    );
}

export default SidebarMenu;
