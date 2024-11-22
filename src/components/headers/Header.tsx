import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks.ts";
import {useAuth} from "../../hooks/useAuth.ts"
import {UserAuth} from "../../context/AuthContext.tsx";
import NavBar from "./NavBar.tsx";
import NavBarUserAuth from "./NavBarUserAuth.tsx";
import Modal from "./Modal.tsx";


const Header = () => {
    const {isAuth} = useAuth()
    const {userAuth, logOut} = UserAuth()
    const orderData = useAppSelector(state => state.products.order)
    const favoriteData = useAppSelector(state => state.products.favorite)
    const toggle = useAppSelector(state => state.header.toggle)

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <header className="flex pt-[30px]  justify-center">
            <Link to="/" className="grid place-content-center">
                <h1 className="font-volkhov  text-[52px] pr-[345px] ">FASCO</h1>
            </Link>
            <div className="flex  items-center">
                <NavBar/>
                <NavBarUserAuth
                    handleSignOut={handleSignOut}
                    userAuth={userAuth}
                    isAuth={isAuth}
                    favoriteData={favoriteData}
                    orderData={orderData}
                />
            </div>
            {toggle && <Modal orderData={orderData}/>}
        </header>
    );
};

export default Header;