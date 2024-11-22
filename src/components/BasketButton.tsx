import {CiShoppingBasket} from "react-icons/ci";
import {setToggleActive} from "../store/slices/headerSlices.ts";
import {useAppDispatch} from "../hooks/reduxHooks.ts";

const BasketButton = () => {
    const dispatch = useAppDispatch()

    return (
        <div className="fixed bottom-5 grid place-content-center rounded right-5 w-[60px] h-[60px] bg-gray-600">
            <CiShoppingBasket size={35} onClick={() => {
                dispatch(setToggleActive())
                document.body.style.overflow = "hidden"
            }} className=" cursor-pointer text-white"/>
        </div>
    );
};

export default BasketButton;