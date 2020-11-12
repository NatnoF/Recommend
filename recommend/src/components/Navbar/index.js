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
} from "./NavbarProperties";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Recommend</NavLogo>

          <MobileIcon onClick={toggle}>
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
              <NavLinks to="placeholder">Placeholder</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
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
