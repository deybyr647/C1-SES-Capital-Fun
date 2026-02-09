import { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword as firebaseSignIn,
  createUserWithEmailAndPassword as firebaseCreateUser,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth } from "./FirebaseConfig";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = (user) => {
    if (!user) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setAuthUser(formatAuthUser(user));
    setLoading(false);
  };

  const signInWithEmailAndPassword = (email, password) =>
    firebaseSignIn(auth, email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    firebaseCreateUser(auth, email, password);

  const signOut = () => firebaseSignOut(auth).then(() => setAuthUser(null));

  // Listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
};

export default useFirebaseAuth;
