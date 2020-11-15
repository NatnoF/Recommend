import React from 'react';
import './SidebarMenu.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SidebarOption from './SidebarOption';
import {Icon, Background} from './SidebarMenuProperties';

const SidebarMenu = () => {
    return (
        <>
        <Background>
        <Icon to="/">Recommend</Icon>
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
        </Background>
        </>
    );
}

export default SidebarMenu;
