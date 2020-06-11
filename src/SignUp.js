import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./config/Firebase";
import { Fade } from 'react-reveal';
const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <>
            <div classname="container-shadow" ></div >
            <div classname="container"  >
                <div className="wrap">
                    <Fade top>
                        <div className="container" id="sign-in-form">

                            <h1 className="headings" style={{ textAlign: 'center' }}>Create Account</h1>
                            <form onSubmit={handleSignUp}>
                                <div classnameName="form-group">
                                    <label>
                                        Email    </label>
                                    <input name="email" type="email" placeholder="Email" />

                                    <label>
                                        Password
                                    </label >
                                    <input name="password" type="password" placeholder="Password" />

                                    <input type="submit" class="button" name="submit" value="Sign up" />
                                </div>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>
        </>

    );
};

export default withRouter(SignUp);