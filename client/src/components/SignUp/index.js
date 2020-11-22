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
} from './SignUpProperties';


const SignUp = ({ onRegister }) => {
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
                                return onRegister({
                                    username: userNameRef.current.value,
                                    password: passwordRef.current.value
                                });
                            }}
                        >
                            <FormH1>Create your account</FormH1>
                            <FormLabel htmlFor="for">Your Username</FormLabel>
                            <FormInput ref={userNameRef} type="text" name="username" required />
                            <FormLabel htmlFor="for">Your Password</FormLabel>
                            <FormInput ref={passwordRef} type="password" name="password" required />
                            <FormButton type="submit">Finish</FormButton>
                            <Text><a className="btn btn-primary" href="/signin">Have an Account?</a></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignUp;
