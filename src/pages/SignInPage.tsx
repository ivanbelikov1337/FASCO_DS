import signIn from "../assets/Rectangle 19280.svg"
import google from "../assets/image 939.png"
import gmail from "../assets/image 940.png"
import Login from "../components/Login.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext.tsx";
import {useEffect} from "react";

const SignInPage = () => {
    const { googleSignIn, userAuth } = UserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (userAuth !== null) {
            navigate('/');
        }
    }, [userAuth]);

    return (
        <div className="flex border gap-[40px] border-[#DBDBDB] m-[40px_150px_100px_150px]">
            <img src={signIn} width={560} alt="signIn"/>
            <div>
                <h1 className="font-volkhov text-[#484848] text-[40px] flex items-center h-[40px] pt-[90px]">FASCO</h1>
                <p className="font-volkhov text-[25px] pt-[80px]">Sign In To FASCO</p>
                <div className="flex gap-[80px] pt-[30px]">
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex gap-[10px] justify-center border border-[#5B86E5] rounded-[8px] items-center w-[250px] h-[50px] font-Poppins text-[16px]">
                        <img src={google} alt="google"/>
                        <p>Sign in with Google</p>
                    </button>
                    <button
                        className="flex gap-[10px] justify-center border border-[#5B86E5] rounded-[8px] items-center w-[250px] h-[50px] font-Poppins text-[16px]">
                        <img src={gmail} alt="gmail"/>
                        <p>Sign in with Email</p>
                    </button>
                </div>
                <p className={`"font-Poppins text-[25px] text-[#838383] text-center pt-[30px] before:content-['-'] after:content-['-'] before:p-[10px] after:p-[10px]`}>
                    OR
                </p>
                <Login/>
                <p className="p-6 text-center text-[19px]">
                    Or <NavLink className="text-blue-600" to="/signup">register</NavLink>
                </p>
            </div>

        </div>
    );
};

export default SignInPage;