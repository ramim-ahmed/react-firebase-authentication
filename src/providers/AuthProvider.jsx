/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import "../firebase";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [firebaseError, setFirbaseError] = useState("");
  //auth state observer
  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  // sign up function
  const signup = async (email, password, username) => {
    const auth = getAuth();
    setFirbaseError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      const user = auth.currentUser;
      setCurrentUser({
        ...user,
      });
      setAuthSuccess(true);
    } catch (error) {
      setFirbaseError(error?.message);
    }
  };

  // login function
  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout function
  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const authValue = {
    currentUser,
    firebaseError,
    authSuccess,
    signup,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
