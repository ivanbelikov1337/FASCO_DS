import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {removeItemsFromOrder} from "../store/slices/productsSlice.ts";
import {RiDeleteBin6Line} from "react-icons/ri";
import {getTotalSum} from "../utility/data.ts";
import {NavLink} from "react-router-dom";
import {setToggleAnActive} from "../store/slices/headerSlices.ts";
import QuantitySelector from "../components/QuantitySelector.tsx";

const Order = () => {
    const orderData = useAppSelector(state => state.products.order)
    const dispatch = useAppDispatch()

    return (
        <section className="mt-[30px] grid place-content-center">
            <h1 className="text-[42px] h-[50px] grid place-content-center text-center font-volkhov">Favorite Cart</h1>
            <div
                className="pt-[35px] mt-[30px] grid grid-cols-3 pl-[20px] gap-[0px_10px]  border-t  border-b overflow-auto h-[570px]  w-[1230px]">
                {orderData.map(el => (
                    <div key={el.id} className="flex">
                        <div  className="flex h-[230px] gap-[20px]">
                            <img src={el.img} className="w-[170px] h-[230px] rounded" alt="things"/>
                            <div className="grid gap-2.5">
                                <h3 className="text-[22px] font-volkhov w-[175px]">{el.title}</h3>
                                <p className="font-volkhov text-[20px] text-[#8A8A8A]">Size: {el.selectedSize}</p>
                                <p className="font-volkhov text-[20px]"
                                   style={{color: el.selectedColor}}>Color</p>
                                <div className="flex gap-12 items-center">
                                    <p className="font-Poppins text-[22px]">${el.price}</p>
                                    <RiDeleteBin6Line size={30} onClick={() => dispatch(removeItemsFromOrder(el.id))}
                                                      cursor="pointer" color={"gray"}/>
                                </div>
                                <QuantitySelector el={el}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid place-content-center  pt-[70px]">
                <div className="flex w-[500px]  justify-between font-Poppins text-[22px]">
                    <p>Total</p>
                    <p className="font-bold">${getTotalSum(orderData)}</p>
                </div>
                <NavLink to="/checkout"
                         onClick={() => {
                             dispatch(setToggleAnActive())
                             document.body.style.overflow = ""
                         }}
                         className="text-white mt-[25px] w-[500px]  hover:bg-gray-400 hover:text-black flex justify-center items-center drop-shadow-[0_15px_15px_gray] rounded-[10px] bg-black  h-[56px]">
                    Checkout
                </NavLink>
            </div>
        </section>
    );
};

export default Order;