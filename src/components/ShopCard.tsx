import ShopCards from "./ShopCards.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {sortAll, sortHeightPrice, sortLowPrice} from "../store/slices/shopSlices.ts";

const ShopCard = () => {
    const {shopData} = useAppSelector(state => state.shop)

    const dispatch = useAppDispatch()
    const handleChangeOptions = (e: string) => {
        switch (e) {
            case "Lowest price" :
                dispatch(sortLowPrice())
                break
            case "Highest price" :
                dispatch(sortHeightPrice())
                break
            case "All" :
                dispatch(sortAll())
                break
        }
    }
    return (
        <div className="min-w-[920px]">
            <select className="w-[220px] cursor-pointer outline-none rounded font-volkhov text-[16px]"
                    name="Filter"
                    onChange={(e) => handleChangeOptions(e.target.value)}>
                <option>All</option>
                <option>Lowest price</option>
                <option>Highest price</option>
            </select>
            <div className="grid pt-[30px] grid-cols-3 grid-rows-3 gap-[15px]">
                {shopData.map((el) =>
                    (<ShopCards key={el.id}
                                img={el.img}
                                id={el.id}
                                price={el.price}
                                title={el.title}
                                ballColor={el.ballColor}
                        />
                    ))}
            </div>
        </div>

    )
        ;
};

export default ShopCard;