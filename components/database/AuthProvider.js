import { createContext, useContext } from "react";
import useFirebaseAuth from "./UseFirebaseAuth";

const AuthUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthUserContext);

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();

  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
