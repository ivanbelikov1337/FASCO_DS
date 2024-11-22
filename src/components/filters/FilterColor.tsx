import {dataFilterColor} from "../../utility/data.ts";
import {filterByColor} from "../../store/slices/shopSlices.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {setIndexColor} from "../../store/slices/shopSlices.ts";

const FilterColor = () => {
    const dispatch = useAppDispatch()
    const indexSize = useAppSelector(state => state.shop.filter.indexColor)

    const handleChange = (i: number, color: string) => {
        dispatch(setIndexColor(i))
        dispatch(filterByColor(color))
    }

    return (
        <div className="mt-[15px] grid gap-[5px] grid-cols-7">
            {dataFilterColor.map((el, i) =>
                <span key={i}
                      onClick={() => handleChange(i , el)}
                      className={`p-0.5 cursor-pointer caret-transparent w-[30px] h-[30px] rounded-full `}
                      style={{border: indexSize === i ? '3px solid gray' : '', backgroundColor: el}}
                />
            )}
        </div>
    );
};

export default FilterColor;