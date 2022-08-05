import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from './UseFirebaseAuth';

const authUserContext = createContext({
    authUser: null,
    loading: true,
    signInWithEmailAndPassword: async () => {},
    createUserWithEmailAndPassword: async () => {},
    signOut: async () => {}
});

// custom hook to use the authUserContext and access authUser and loading
const useAuth = () => useContext(authUserContext);

function AuthUserProvider({ children }) {
    const auth = useFirebaseAuth();
    return <authUserContext.Provider value={auth}>
        {children}
    </authUserContext.Provider>;
}

export { useAuth, AuthUserProvider };