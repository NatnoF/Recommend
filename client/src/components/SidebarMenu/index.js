import React from 'react';
import './SidebarMenu.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Link} from 'react-router-dom';
import SidebarOption from './SidebarOption';

const SidebarMenu = () => {
    return (
        <div className="sidebar">
            {/* { Brand Logo } */}
            <MenuBookIcon />

            <SidebarOption text="Wishlist"/>
            <SidebarOption text="My Reviews"/>
            <SidebarOption text="Following"/>
            <SidebarOption text="Favorite Genres"/>
            {/* { SideMenuOption } */}
            {/* { SideMenuOption } */}
            {/* { SideMenuOption } */}
            {/* { SideMenuOption } */}
            {/* { SideMenuOption } */}

            {/* { Button -> search/review? } */}
        </div>
    );
}

export default SidebarMenu;
