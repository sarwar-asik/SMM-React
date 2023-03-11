import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();

const ProviderContext = ({ children }) => {
  const auth = getAuth(app);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      return unsubscribe();
    };
  }, [auth]);

  const logout = () => {
    return signOut(auth);
  };
  const totalData = {
    name: "Zinku",
    createUser,
    user,
    login,
    logout,
  };

  return (
    <div>
      <AuthContext.Provider value={totalData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ProviderContext;
