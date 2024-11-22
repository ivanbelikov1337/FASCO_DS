import {dataFilterCollections} from "../../utility/data.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {setIndexCollections} from "../../store/slices/shopSlices.ts";

const FilterCollections = () => {
    const indexCollections = useAppSelector(state => state.shop.filter.indexCollections)
    const dispatch = useAppDispatch()

    return (
        <div className="flex flex-col caret-transparent  w-[100px] pt-[15px] gap-[10px] fonnt-Jost text-[16px] text-[#8A8A8A]">
            {dataFilterCollections.map((el, i) =>
                <span key={i}
                      onClick={() => dispatch(setIndexCollections(i))}
                      className="rounded-[10px] p-0.5 cursor-pointer"
                      style={{backgroundColor: indexCollections === i ? 'rgb(229, 231, 235' : ''}}>
                        {el}
                    </span>
            )}
        </div>
    );
};

export default FilterCollections;