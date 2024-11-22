import {addThingsQuantity, removeThingsQuantity} from "../store/slices/productsSlice.ts";
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import {IDataOrder} from "../utility/types.ts";
import {FC} from "react";

interface IProps {
    el: IDataOrder
}

const QuantitySelector: FC<IProps> = ({el}) => {
    const dispatch = useAppDispatch()
    return (
        <div
            className="flex justify-evenly gap-[30px] rounded-[4px] h-[45px] p-[10px] border border-[#EEEEEE] w-[128px]">
            <button className="text-[22px]"
                    onClick={() => dispatch(removeThingsQuantity({id: el.id}))}>
                -
            </button>
            <p>{el.quantity}</p>
            <button className="text-[20px]"
                    onClick={() => dispatch(addThingsQuantity({id: el.id}))}>
                +
            </button>
        </div>
    );
};

export default QuantitySelector;