import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginToken, setLoginToken] = useState("");

  return (
    <LoginContext.Provider value={{ loginToken, setLoginToken }}>
      {children}
    </LoginContext.Provider>
  );
};
