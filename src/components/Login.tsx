import {setUser} from "../store/slices/userSlice.ts"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import Form from "./Form.tsx";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/reduxHooks.ts";

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate("/")
            })
            .catch(() => alert("Invalid user"))
    }

    return (
        <Form title="Sign in" handleClick={handleLogin}/>
    );
};

export default Login;