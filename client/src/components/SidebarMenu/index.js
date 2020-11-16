import React from 'react';
import './SidebarMenu.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SidebarOption from './SidebarOption';
import NotesIcon from '@material-ui/icons/Notes';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GroupIcon from '@material-ui/icons/Group';

const SidebarMenu = () => {
    return (
            <div className="sidebar">
                <MenuBookIcon className="sidebar__logoIcon" />
                <SidebarOption active Icon={SearchIcon} text="Find"/>
                <SidebarOption Icon={FavoriteBorderIcon} text="Wishlist"/>
                <SidebarOption Icon={GroupIcon} text="Following"/>
                <SidebarOption Icon={NotesIcon} text="My Reviews"/>
                <SidebarOption Icon={NotesIcon} text="Favorite Genres"/>
                <SidebarOption Icon={NotesIcon} text="Placeholder"/>
                <SidebarOption Icon={NotesIcon} text="Placeholder"/>

                <Button variant="outlined" className="sidebar__button" fullWidth>Placeholder</Button>            
                </div>
    );
}

export default SidebarMenu;
