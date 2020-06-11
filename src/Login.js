import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import app from "./config/Firebase";
import { Authcontext } from "./Auth.js";
import { Zoom } from 'react-reveal';
const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(Authcontext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <div classname="container-shadow" ></div >
            <div classname="container">
                <div className="wrap">
                    <Zoom>
                        <div className="container" id="sign-in-form">

                            <h1 className="headings" style={{ textAlign: 'center' }}>Welcome</h1>
                            <form onSubmit={handleLogin}>
                                <div classnameName="form-group">
                                    <label>
                                        Email    </label>
                                    <input name="email" type="email" placeholder="Email" />

                                    <label>
                                        Password
                                    </label >
                                    <input name="password" type="password" placeholder="Password" />

                                    <input type="submit" class="button" name="submit" value="Sign in" />
                                </div>
                            </form>
                            <Link to="/signup">
                                <button className="button " style={{ marginLeft: '15%' }}> Signup</button>
                            </Link>


                        </div>
                    </Zoom>
                </div>

            </div>
        </>

    );
};

export default withRouter(Login);



//{
    // <h1>Log in</h1>
    // <form onSubmit={handleLogin}>
    //    <div classnameName="form-group">
    //         <label>
    //             Email    </label>
    //        <input name="email" type="email" placeholder="Email" />

    //        <label>
   // Password</label >
        //        <input name="password" type="password" placeholder="Password" />
        //
    //    <button type="submit">Log in</button>
    //   </div>
    //   </form>
//}