import React, { createContext, useEffect, useState } from "react";
import { authApi } from "../api";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [isLoading, setLoading] = useState(true);
  const [userID, setUserID] = useState(undefined);

  async function getLoggedIn() {
    try {
      setLoading(true);
      const apiLoggedIn = await authApi.isLoggedIn();
      
      setLoggedIn(apiLoggedIn.data.status);
      setUserID(apiLoggedIn.data.userID);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  // Only runs the first time the component is created
  useEffect(() => {
    getLoggedIn();
  }, []);

  // Allows other components to update the loggedIn
  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        getLoggedIn,
        isLoading,
        userID,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export {AuthContextProvider}