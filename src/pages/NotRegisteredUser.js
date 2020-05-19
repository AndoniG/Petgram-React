import React from 'react';
import { useStateValue } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

export default () => {
    const [{ }, dispatch] = useStateValue();

    return (
        <React.Fragment>
            <RegisterMutation>
                {
                    (register, { data, loading, error }) => {

                        const onSubmit = ({ email, password }) => {
                            const input = { email, password };
                            const variables = { input };
                            register({ variables }).then(
                                ({ data }) => {
                                    const { signup } = data;
                                    dispatch({ type: "loggedIn", token: signup })
                                }
                            );
                        }

                        const errorMsg = error && "User already exists or there is an unexpected error."

                        return <UserForm disabled={loading} error={errorMsg} title="Sign In" onSubmit={onSubmit}></UserForm>
                    }
                }
            </RegisterMutation>
            <LoginMutation>
                {
                    (login, { data, loading, error }) => {

                        const onSubmit = ({ email, password }) => {
                            const input = { email, password };
                            const variables = { input };
                            login({ variables }).then(
                                ({ data }) => {
                                    const { login } = data;
                                    dispatch({ type: "loggedIn", loggedIn: true, token: login })
                                }
                            );
                        }
                        const errorMsg = error && "Email or Password wrong."
                        return <UserForm disabled={loading} error={errorMsg} title="Log In" onSubmit={onSubmit}></UserForm>
                    }
                }
            </LoginMutation>
        </React.Fragment>
    )

}
