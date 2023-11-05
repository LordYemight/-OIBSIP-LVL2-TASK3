import axios from 'axios';
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const logout = async () => {
        try {
          await axios.delete('/logout'); // Use the correct HTTP method (DELETE)
          setUser(null); // Clear the user data on the client-side
        } catch (error) {
          console.error('Logout failed:', error);
        }
      };
      

    useEffect(()=> {
        if (!user) {
            axios.get('/profile').then(({data})=> {
                setUser(data)
            })
        }
    }, [])



    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
}
