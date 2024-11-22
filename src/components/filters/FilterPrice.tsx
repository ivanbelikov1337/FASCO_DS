import {dataFilterPrice} from "../../utility/data.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {filterByPrice, setIndexPrice} from "../../store/slices/shopSlices.ts";

const FilterPrice = () => {
    const indexPrice = useAppSelector(state => state.shop.filter.indexPrice)
    const dispatch = useAppDispatch()
    const handleChange = (i: number, price: string) => {
        dispatch(setIndexPrice(i))
        dispatch(filterByPrice(price))
    }
    return (
        <div className="flex flex-col w-[80px]  pt-[15px] gap-[10px] fonnt-Jost text-[16px] text-[#8A8A8A]">
            {dataFilterPrice.map((el, i) =>
                <span key={i}
                      onClick={() => handleChange(i, el)}
                      className="rounded-[10px] caret-transparent p-0.5 cursor-pointer"
                      style={{backgroundColor: indexPrice === i ? 'rgb(229, 231, 235' : ''}}>
                        {el}
                    </span>
            )}
        </div>

    );
};

export default FilterPrice;