import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import db from "../../firestore";
import { doc, setDoc } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password, firstName, lastName) {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userRecord) => {
        setDoc(doc(db, "users", userRecord.user.uid), {
          email: email,
          firstName: firstName,
          lastName: lastName,
          links: [],
        });
        sendEmailVerification(auth.currentUser);
        updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName}`,
        });
      }
    );
  }
  function forgotPassword(auth, email) {
    sendPasswordResetEmail(auth, email);
  }
  function resetPassword(user, newPassword) {
    updatePassword(user, newPassword);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        logOut,
        googleSignIn,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
