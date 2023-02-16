import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const [state, setState] = useState({
        isAuthenticated: false
    });
    
    const toggleAuth = () => {
        setState({isAuthenticated: !state.isAuthenticated })
    }

    return ( 
       <AuthContext.Provider value={{...state, toggleAuth}}>
          {props.children}
       </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;