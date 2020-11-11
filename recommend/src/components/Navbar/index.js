import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './NavbarProperties';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >
                        Recommend
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar
