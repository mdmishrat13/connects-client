import { getAuth, signInWithPopup,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../auth/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authLoading,setAuthLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () => {
        setAuthLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createWithEmail = (email, password) => {
        setAuthLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailLogin = (email, password) => {
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        return signOut(auth).then(setUser(null))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setAuthLoading(false)
            }
            else {
                setAuthLoading(false)
            }
          
        })
        return ()=>unSubscribe()
    },[])

    const authInfo = {
        googleLogin,
        createWithEmail,
        emailLogin,
        logout,
        user,
        authLoading
    }

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider