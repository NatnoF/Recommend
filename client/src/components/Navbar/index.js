import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Auth from "../../utils/Auth";
import { UserContext } from "../../utils/UserContext";
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
import Button from '@material-ui/core/Button';

const Navbar = ({toggle}) => {
  console.log("NAV", Auth.isAuthenticated);

  // eslint-disable-next-line no-unused-vars
  const [user, dispatch] = useContext(UserContext);
  const history = useHistory();
  
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
              <NavPages to="/saved">MyBooks</NavPages>
            </NavItem>

            <NavItem>
              <NavPages to="/search">Search</NavPages>
            </NavItem>

            {Auth.isAuthenticated ? (
              <Button variant="contained" color="secondary"
                onClick={() => {
                  Auth.signout(() => history.push('/login'))
                  dispatch({
                    type: "GET_USER",
                    payload: {}
                  })
                }}>
                Logout
              </Button>
            ) : (
              <NavBtn>
                <NavBtnLink to="/signup">Sign Up</NavBtnLink>
              </NavBtn>
            )}

          </NavMenu>

          {Auth.isAuthenticated ? (
            <NavBtn>
              <NavBtnLink to="/">Signed In</NavBtnLink>
            </NavBtn>
          ) : (
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          )}

        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
