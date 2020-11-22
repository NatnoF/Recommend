import React, { useEffect,useContext } from 'react'
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

  // eslint-disable-next-line no-unused-vars
  const [user, dispatch] = useContext(UserContext);
  const history = useHistory();
  
  useEffect(() => {
    if (Auth.isAuthenticated)
    {
      fetch('api/users/user', {
        credentials: 'include'
      })
        .then((res) => {
          return res.json(res)
  
        })
        .then(data => {
          dispatch({
            type: "GET_USER",
            payload: data
          })
  
        })
        .catch((err) => {
          console.log('Error fetching authorized user.');
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <Nav>
        <NavbarContainer className="nav">
          <NavLogo to="/"><h1>Recommend</h1></NavLogo>

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
                  Auth.signout(() => history.push('/signin'))
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
              <NavBtnLink to="/">{user.username}</NavBtnLink>
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
