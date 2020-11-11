import React from "react";
import {FaBars} from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarProperties";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Recommend</NavLogo>

          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>

            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="placeholder">Placeholder</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
