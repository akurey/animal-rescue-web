import React, { createContext, useMemo, useState } from "react";

interface AuthProps {
  auth?: any;
  setAuth?: any;
}

const AuthContext = createContext<AuthProps>({});

interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthProps | undefined>({});
  const authProviderValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
