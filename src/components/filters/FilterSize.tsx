import {dataFilterSize} from "../../utility/data.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {setIndexSize} from "../../store/slices/shopSlices.ts";

const FilterSize = () => {
    const dispatch = useAppDispatch()
    const indexSize = useAppSelector(state => state.shop.filter.indexSize)
    return (
        <div className="pt-[15px] grid grid-cols-3 w-[150px] gap-[5px]">
            {dataFilterSize.map((el, i) =>
                <span key={i}
                      onClick={() => dispatch(setIndexSize(i))}
                      className="text-[16px] text-[#8A8A8A] w-[42px] h-[42px]  items-center border-[#8A8A8A]
                    border rounded-[5px] flex  justify-center cursor-pointer"
                      style={{backgroundColor: indexSize === i ? 'rgb(229, 231, 235' : ''}}>
                        {el}
                    </span>
            )}
        </div>
    );
};

export default FilterSize;