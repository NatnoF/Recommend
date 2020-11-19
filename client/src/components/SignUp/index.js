import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton
} from './SignUpProperties';


const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Recommend</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Create your account</FormH1>
                            <FormLabel htmlFor="for">Your Username</FormLabel>
                            <FormInput type="username" required />
                            <FormLabel htmlFor="for">Your Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Finish</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignUp;
