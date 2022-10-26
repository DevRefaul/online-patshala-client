import React, { useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

// google provider
const googleProvider = new GoogleAuthProvider();

// facebook provider
const facebookProvider = new FacebookAuthProvider();

// github provider
const githubProvider = new GithubAuthProvider();

// main function
const AuthContexts = ({ children }) => {
  // user state
  const [user, setUser] = useState(null);

  // loading state
  const [loading, setLoading] = useState(true);

  // google sign in
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // facebook sign in
  const handleFacebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  // github sign in
  const handleGithubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // create user with gmail and password
  const handleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in user with gmail and password
  const handleLoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // password reset email
  const handlePasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // log out user
  const handleLogoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user name
  const handleUpdateUserName = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: `${name}`,
      photoURL: `${image}`,
    });
  };

  // onAuthStateChanged for checking user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    handleCreateUser,
    handleFacebookSignIn,
    handleGithubSignIn,
    handleGoogleSignIn,
    handleLoginUser,
    handleLogoutUser,
    handleUpdateUserName,
    handlePasswordReset,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContexts;
