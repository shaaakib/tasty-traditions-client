import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const user = null;

  const authInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
