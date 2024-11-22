import {removeItemsFromFavorite} from "../store/slices/productsSlice.ts";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {FaStar} from "react-icons/fa";


const Favorite = () => {
    const orderData = useAppSelector(state => state.products.favorite)
    const dispatch = useAppDispatch()
    const getSumTotal = orderData.reduce((acc, val) => acc + val.price, 0)



    return (
        <section className="mt-[60px] grid place-content-center">
            <h1 className="text-[42px] h-[50px] grid place-content-center text-center font-volkhov">Favorite Cart</h1>
            <div
                className="pt-[35px] mt-[30px] grid grid-cols-3 pl-[20px] gap-[0px_10px]  border-t  border-b overflow-auto h-[570px]  w-[1230px]">
                {orderData.map(el => (
                    <div className="flex">
                        <div key={el.id} className="flex h-[230px] gap-[20px]">
                            <img src={el.img} className="w-[170px] h-[230px] rounded" alt="things"/>
                            <div className="flex flex-col justify-between pb-[20px] pt-[20px]">
                                <h3 className="text-[22px] font-volkhov w-[175px]">{el.title}</h3>
                                <div className="flex gap-12 items-center">
                                    <p className="font-Poppins text-[22px]">${el.price}</p>
                                    <FaStar size={30} cursor="pointer" onClick={() => dispatch(removeItemsFromFavorite(el.id))} color={"gray"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex pt-[20px] justify-between font-Poppins text-[22px]">
                <p>Total</p>
                <p className="font-bold">${getSumTotal}</p>
            </div>
        </section>
    );
};

export default Favorite;