import React from 'react';
import SignUp from '../SignUp';
import { useHistory } from "react-router";
import Auth from "../../utils/Auth";
//The component for doing the actual signup of the User

function Register() {

	let history = useHistory();

	const register = (data) => {
		fetch('api/users/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
			.then((response) => {
				if (response.status === 200) {
					//relocate to the login page

					fetch('api/users/login', {
						method: 'POST',
						body: JSON.stringify(data),
						credentials: 'include',
						headers: {
							'Content-Type': 'application/json'
						},
					})
						.then((response) => {
							if (response.status === 200) { //All good
								Auth.authenticate(() => { //Update the boolean and take off the cuffs
									// setRedirectToReferrer(true)
									history.push("/")
								});
							}
						})
						.catch((err) => {// No beuno, kick them
							console.log('Error logging in.', err);
						});
				}
			})
			.catch((err) => {
				console.log('Error registering user.', err);
			});
	}

	return (
		<>
			<SignUp onRegister={register} />
		</>
	)

}

export default Register