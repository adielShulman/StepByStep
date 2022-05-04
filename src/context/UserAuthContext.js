import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] =useState

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth,email, password);
    }

    function Login(email, password) {
        return createUserWithEmailAndPassword(auth,email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }

    useEffect(() =>{
        const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

        })
        return () =>{
            unsbscribe();
        }
    }, []);

    return(
        <UserAuthContextProvider value={{user,signUp, Login, logOut, googleSignIn }}> {children} </UserAuthContextProvider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}
