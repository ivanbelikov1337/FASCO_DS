import {setUser} from "../store/slices/userSlice.ts"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import Form from "./Form.tsx";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/reduxHooks.ts";


const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = (email:string, password:string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="Register"
            handleClick={handleRegister}
        />
    )
}

export default SignUp;

