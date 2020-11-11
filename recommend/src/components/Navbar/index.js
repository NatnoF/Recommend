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

                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" >About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar
