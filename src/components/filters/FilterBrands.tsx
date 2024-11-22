import {dataFilterBrands} from "../../utility/data.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {setIndexBrands} from "../../store/slices/shopSlices.ts";

const FilterBrands = () => {
    const indexBrands = useAppSelector(state => state.shop.filter.indexBrands)
    const dispatch = useAppDispatch()

    return (
        <div className="flex flex-wrap  w-[320px] pt-[15px] gap-[8px] fonnt-Jost text-[16px] text-[#8A8A8A]">
            {dataFilterBrands.map((el, i) =>
                <span key={i}
                      onClick={() => dispatch(setIndexBrands(i))}
                      className="rounded-[10px] caret-transparent p-0.5 cursor-pointer"
                      style={{backgroundColor: indexBrands === i ? 'rgb(229, 231, 235' : ''}}>
                        {el}
                    </span>
            )}
        </div>
    );
};

export default FilterBrands;