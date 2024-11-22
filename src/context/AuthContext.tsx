import {useContext, createContext, useEffect, useState, ReactNode,} from 'react';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {auth} from '../firebase';
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import {removeUser, setUser} from "../store/slices/userSlice.ts";
import {useNavigate} from "react-router-dom";

export interface IUserAuth {
    email: string
    id: string
    token: string
    photoURL: string
    displayName: string
}

interface PostsContextValues {
    googleSignIn: () => void;
    logOut: () => void;
    userAuth: IUserAuth
}

const AuthContext = createContext<PostsContextValues>({
    userAuth: {
        email: "",
        id: "",
        token: "",
        photoURL: "",
        displayName: ""
    },
    googleSignIn() {},
    logOut() {}
});

export const AuthContextProvider = ({children}: { children: ReactNode }) => {
    const [userAuth, setUserAuth] = useState<IUserAuth>({
        email: "",
        id: "",
        token: "",
        photoURL: "",
        displayName: ""
    });
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken
            }))
            navigate("/")
        });
    };

    const logOut = () => {
        signOut(auth).then(() => dispatch(removeUser()))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserAuth(currentUser as unknown as IUserAuth);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, userAuth}}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};