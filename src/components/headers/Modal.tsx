import {setToggleAnActive} from "../../store/slices/headerSlices.ts";
import {removeItemsFromOrder} from "../../store/slices/productsSlice.ts";
import {RiDeleteBin6Line} from "react-icons/ri";
import {getTotalSum} from "../../utility/data.ts";
import {NavLink} from "react-router-dom";
import QuantitySelector from "../QuantitySelector.tsx";
import {useAppDispatch} from "../../hooks/reduxHooks.ts";
import {IDataOrder} from "../../utility/types.ts";
import {FC} from "react";
import CloseModal from "./CloseModal.tsx";

interface IProps {
    orderData: IDataOrder[]
}

const Modal: FC<IProps> = ({orderData}) => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div
                className="bg-[#787878] flex justify-end fixed z-10 top-0 overflow-hidden opacity-40 w-full h-screen"
                onClick={() => {
                    dispatch(setToggleAnActive())
                    document.body.style.overflow = ""
                }}
            />
            <div
                className="h-screen grid grid-rows-[50px_1fr_50px_80px] fixed top-0 right-0 z-20 w-[550px] bg-[#FFFFFF] p-[25px]">
                <CloseModal/>
                <div className="pt-[10px] overflow-auto grid gap-5">
                    {orderData.map(el => (
                        <div key={el.id} className="flex h-[230px] gap-[20px]">
                            <img src={el.img} className="w-[160px] h-[220px] rounded" alt="things"/>
                            <div className="grid gap-[19px]">
                                <h3 className="text-[22px] font-volkhov">{el.title}</h3>
                                <p className="font-volkhov text-[20px] text-[#8A8A8A]">Size: {el.selectedSize}</p>
                                <p className="font-volkhov text-[20px]"
                                   style={{color: el.selectedColor}}>Color</p>
                                <p className="font-Poppins text-[22px]">${el.price}</p>
                                <div className="flex gap-[20px] items-center">
                                    <QuantitySelector el={el}/>
                                    <RiDeleteBin6Line onClick={() => dispatch(removeItemsFromOrder(el.id))}
                                                      size={40} cursor="pointer" color={"gray"}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="font-volkhov text-[20px] pt-[25px] flex justify-between border-t-2 border-gray-400">
                    <p>Subtotal</p>
                    <p>${getTotalSum(orderData)}</p>
                </div>
                <div className="flex justify-center">
                    <NavLink to="/order"
                             onClick={() => {
                                 dispatch(setToggleAnActive())
                                 document.body.style.overflow = ""
                             }}
                             className="text-white mt-[25px] hover:bg-gray-400 hover:text-black flex justify-center items-center drop-shadow-[0_15px_15px_gray] rounded-[10px] bg-black  w-full h-[56px]">
                        Checkout
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Modal;