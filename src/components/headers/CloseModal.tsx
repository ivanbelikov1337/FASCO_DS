import {AiOutlineClose} from "react-icons/ai";
import {setToggleAnActive} from "../../store/slices/headerSlices.ts";
import {useAppDispatch} from "../../hooks/reduxHooks.ts";

const CloseModal = () => {
    const dispatch = useAppDispatch()
    return (
        <div className="flex justify-between  font-volkhov text-[32px] ">
            <h3>Shopping Cart</h3>
            <AiOutlineClose onClick={() => {
                dispatch(setToggleAnActive())
                document.body.style.overflow = ""
            }} className="cursor-pointer"/>
        </div>
    );
};

export default CloseModal;