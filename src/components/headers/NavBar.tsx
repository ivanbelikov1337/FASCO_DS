import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex font-Poppins gap-[58px] items-center">
            <NavLink className={({isActive}) => isActive ? "text-cyan-400" : ''} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-cyan-400" : ''} to="/shop">Shop</NavLink>
        </nav>
    );
};

export default NavBar;