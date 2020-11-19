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
  NavBtn,
  NavBtnLink,
  NavPages
} from "./NavbarProperties";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer className="nav">
          <NavLogo to="/">Recommend</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>

            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>

            <NavItem>
              <NavPages to="/saved">MyBooks</NavPages>
            </NavItem>

            <NavItem>
              <NavPages to="/search">Search</NavPages>
            </NavItem>

            <NavItem>
              <NavPages to="/signup">Sign Up</NavPages>
            </NavItem>

          </NavMenu>

          <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
