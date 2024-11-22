import {dataFilterTags} from "../../utility/data.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {setIndexTags} from "../../store/slices/shopSlices.ts";

const FilterTags = () => {
    const indexTags = useAppSelector(state => state.shop.filter.indexTags)
    const dispatch = useAppDispatch()
    return (
        <div
            className="flex flex-wrap caret-transparent  w-[320px] pt-[15px] gap-[16px] fonnt-Jost text-[16px] text-[#8A8A8A]">
            {dataFilterTags.map((el, i) =>
                <span key={i}
                      onClick={() => dispatch(setIndexTags(i))}
                      className="rounded-[10px] p-0.5 cursor-pointer"
                      style={{backgroundColor: indexTags === i ? 'rgb(229, 231, 235' : ''}}
                >
                        {el}
                    </span>
            )}
        </div>
    );
};

export default FilterTags;