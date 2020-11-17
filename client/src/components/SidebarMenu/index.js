import React from 'react';
import './SidebarMenu.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SidebarOption from './SidebarOption';
import NotesIcon from '@material-ui/icons/Notes';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GroupIcon from '@material-ui/icons/Group';
import '../reset.css';


const SidebarMenu = () => {
    return (
            <div className="sidebar reset-this">
                <MenuBookIcon className="sidebar__logoIcon" />
                <SidebarOption active to="search" Icon={SearchIcon} text="Find"/>
                <SidebarOption to="/saved" Icon={FavoriteBorderIcon} text="MyBooks"/>
                <SidebarOption Icon={GroupIcon} text="Following"/>
                <SidebarOption Icon={NotesIcon} text="My Reviews"/>
                <SidebarOption Icon={NotesIcon} text="Favorite Genres"/>

                {/* <Button variant="outlined" className="sidebar__button" fullWidth>Placeholder</Button>             */}
                </div>
    );
}

export default SidebarMenu;
