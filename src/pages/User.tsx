import {useAuth} from "../hooks/useAuth.ts";
import {UserAuth} from "../context/AuthContext.tsx";

const User = () => {
    const {isAuth} = useAuth()
    const {userAuth} = UserAuth()

    return (
        <>
            {isAuth || userAuth && (
                <section className="mt-[60px] grid">
                    <h1 className="text-[42px] h-[50px] grid place-content-center text-center font-volkhov">Account</h1>
                    <div className="mt-[50px] grid ml-[100px]  gap-[40px]">
                        <img src={userAuth.photoURL} className="w-[170px] h-[170px] rounded-full" alt="avatar"/>
                        <p className="font-Poppins text-[20px] flex ">Name: {userAuth.displayName.toLocaleUpperCase()}</p>
                        <p className="font-Poppins text-[20px] flex ">Email: {userAuth.email}</p>
                    </div>
                </section>
            )}
        </>
    );
};

export default User;