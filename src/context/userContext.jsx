import { createContext, useContext, useState } from "react";

const userContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <userContext.Provider value={ { user, setUser } }>
            { children }
        </userContext.Provider>
    )
}

const setUser = () => {
    return useContext(userContext).setUser
}

const getUser = () => {
    return useContext(userContext).user
}

export { UserProvider, setUser, getUser }
