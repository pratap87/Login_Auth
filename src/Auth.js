import React, { useEffect, useState } from 'react';
import app from "./config/Firebase";
export const Authcontext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <Authcontext.Provider
            value={{ currentUser }} >
            {children}
        </Authcontext.Provider >
    );

};

