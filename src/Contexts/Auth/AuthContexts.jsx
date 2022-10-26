import React from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContexts = ({ children }) => {
  const authInfo = { name: "Rafee" };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContexts;
