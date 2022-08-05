import { useState, useEffect } from 'react'
import { auth } from './FirebaseConfig';

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
});

const useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    };

    const signInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

    const createUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

    const signOut = () => auth.signOut().then(clear);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return;
        }

        setLoading(true)
        const formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };

// listen for Firebase state change
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut
    };
}

export default useFirebaseAuth;