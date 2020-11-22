import React, { useRef } from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SignInProperties';


const SignIn = ({ onLogin }) => {
    // refs
	const formRef = useRef();
	const userNameRef = useRef();
    const passwordRef = useRef();
    
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Recommend</Icon>
                    <FormContent>
                        <Form action="#"
                            ref={formRef}
                            onSubmit={(e) => {
                                e.preventDefault();
                                return onLogin({
                                    username: userNameRef.current.value,
                                    password: passwordRef.current.value
                                });
                            }}
                        >
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="for">Username</FormLabel>
                            <FormInput ref={userNameRef} type="text" name="username" required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput ref={passwordRef} type="password" name="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text><a className="btn btn-primary" href="/signup">New User?</a></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignIn;
