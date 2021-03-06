import React, { useEffect, useState } from "react";
import SignIn from "../SignIn";
import Auth from "../../utils/Auth";
import { useLocation, useHistory } from "react-router";
//Uses the Auth methods to actually login with the LoginForm Component.

function Login() {
  let location = useLocation();
  let history = useHistory();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  useEffect(() => {
    const { from } = location.state || { from: { pathname: "/" } };
    if (redirectToReferrer) {
      history.push(from);
    }
  }, [redirectToReferrer, history, location.state]);

  /* We need to POST to the API the users info,
        This will get passed down as a prop to the LoginForm */
  const login = (data) => {
    fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          //All good
          Auth.authenticate(() => {
            //Update the boolean and take off the cuffs
            setRedirectToReferrer(true);
          });
        }
      })
      .catch((err) => {
        // No beuno, kick them
        console.log("Error logging in.", err);
      });
  };

  return (
    <>
      <SignIn onLogin={login} />
    </>
  );
}

export default Login;
