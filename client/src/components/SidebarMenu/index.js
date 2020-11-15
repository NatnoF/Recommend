import React from 'react';
import './SidebarMenu.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SidebarOption from './SidebarOption';
import {Icon, Background} from './SidebarMenuProperties';
import NotesIcon from '@material-ui/icons/Notes';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';


const SidebarMenu = () => {
    return (
        <>
        <Background>
        <Icon to="/">Recommend</Icon>
        <div className="sidebar">
            <MenuBookIcon />

            <SidebarOption Icon={LocationSearchingIcon} text="Find"/>
            <SidebarOption Icon={NotesIcon} text="Wishlist"/>
            <SidebarOption Icon={NotesIcon} text="My Reviews"/>
            <SidebarOption Icon={NotesIcon} text="Following"/>
            <SidebarOption Icon={NotesIcon} text="Favorite Genres"/>

            {/* { Button -> search/review? } */}
        </div>
        </Background>
        </>
    );
}

export default SidebarMenu;
