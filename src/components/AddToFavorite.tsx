import {IoIosStar} from "react-icons/io";
import {IoIosStarOutline} from "react-icons/io";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {FC} from "react";
import {addItemsToFavorite, removeItemsFromFavorite} from "../store/slices/productsSlice.ts";
import {IDataShopCard} from "../utility/types.ts";


interface IProps {
    data: IDataShopCard
}

const AddToFavorite: FC<IProps> = ({data}) => {
    const dataFavorite = useAppSelector(state => state.products.favorite)
    const dispatch = useAppDispatch()
    const toggle = dataFavorite.find(el => el.id === data.id)

    return (
        <>
            {toggle ?
                <button onClick={() => dispatch(removeItemsFromFavorite(data.id))}
                        className="w-[50px] grid hover:bg-gray-300 place-content-center h-[50px] rounded-full border bog">
                    <IoIosStar size={30}/>
                </button> :
                <button onClick={() => dispatch(addItemsToFavorite(data))}
                        className="w-[50px] grid hover:bg-gray-300 place-content-center h-[50px] rounded-full border bog">
                    <IoIosStarOutline size={30}/>
                </button>
            }
        </>
    );
};

export default AddToFavorite;