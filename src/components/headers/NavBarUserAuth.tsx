import search from "../../assets/Vector (3)333.svg";
import {NavLink} from "react-router-dom";
import favoriteIcon from "../../assets/Vector000.svg";
import orderIcon from "../../assets/Vector (1)1111.svg";
import {SlLogout} from "react-icons/sl";
import usersIcon from "../../assets/Vector (2)2222.svg";
import {FC} from "react";
import {IUserAuth} from "../../context/AuthContext.tsx";
import {IDataOrder, IDataShopCard} from "../../utility/types.ts";


interface IPops {
    isAuth: boolean
    userAuth: IUserAuth
    favoriteData: IDataShopCard[]
    orderData: IDataOrder[]
    handleSignOut: () => void
}

const NavBarUserAuth: FC<IPops> = ({userAuth, isAuth, handleSignOut, orderData, favoriteData}) => {
    return (
        <>
            {isAuth || userAuth ?
                <div className="flex items-center relative gap-[30px] pl-[170px]">
                    <img src={search} alt="search"/>
                    {favoriteData.length > 0 &&
                        <p className="w-[20px] text-[14px] h-[20px] bg-red-600 rounded-full flex justify-center items-center absolute top-[28px] right-[177px] text-white">
                            {favoriteData.length}
                        </p>
                    }
                    <NavLink to="/favorite"> <img src={favoriteIcon} alt="favorite"/></NavLink>
                    {orderData.length > 0 &&
                        <p className="w-[20px] text-[14px] h-[20px] bg-red-600 rounded-full flex justify-center items-center absolute top-[28px] right-[129px] text-white">
                            {orderData.length}
                        </p>
                    }
                    <NavLink to="/order">
                        <img src={orderIcon} alt="order"/>
                    </NavLink>
                    <div>
                        <SlLogout size={30} color="gray" cursor="pointer" onClick={handleSignOut}/>
                    </div>

                    <NavLink to="/user">
                        {userAuth ?
                            <img src={userAuth.photoURL} alt="avatar" className="w-[40px] j-[40px] rounded-full"/> :
                            <img src={usersIcon} alt="user"/>}
                    </NavLink>
                </div> :
                <div className="font-Poppins flex items-center  pl-[70px] gap-[58px]">
                    <NavLink to="/signIn">Sign in</NavLink>
                    <NavLink to="/signUp"
                             className="text-white grid place-content-center drop-shadow-[0_15px_15px_gray] rounded-[10px] bg-black w-[152px] h-[56px]">Sign
                        up
                    </NavLink>
                </div>
            }
        </>
    );
};

export default NavBarUserAuth;