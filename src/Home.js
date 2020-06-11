import React, { Component } from 'react';
import app from './config/Firebase';
import 'bootstrap/dist/css/bootstrap.css';
import { Zoom } from 'react-reveal'
const Home = () => {
    return (
        <div className="container" style={{ color: 'black' }}>
            <div className="  cont row " style={{ height: '100%' }}>
                <div className="card  col-sm-12 col-xl-12 col-lg-12 col-md-12 ">
                    <Zoom>
                        <div className="card-body">
                            <h1>Welcome to Home page</h1>
                            <br></br>
                            <button className=" button" onClick={() => app.auth().signOut()}>Sign out</button>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Home