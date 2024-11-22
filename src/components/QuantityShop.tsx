import {FC, useState} from "react";
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import {addItemToOrder} from "../store/slices/productsSlice.ts";
import {IDataShopCard} from "../utility/types.ts";

interface IProps {
    data: IDataShopCard
    selectedSize: string
    selectedColor: string
    makeVerify: () => void
}

const QuantityShop: FC<IProps> = ({data, selectedSize, selectedColor,makeVerify}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useAppDispatch()

    const quantityControl = (item: string) => {
        switch (item) {
            case "+" :
                if (quantity <= data.id!) setQuantity(prev => prev + 1)
                break
            case "-" :

                if (quantity > 1) setQuantity(prev => prev - 1)
                break
        }
    }

    const checkVerify = () => {
        if (selectedColor && selectedSize) dispatch(addItemToOrder({...data, selectedSize, selectedColor,quantity}))
        else makeVerify()
    }

    return (
        <div className="flex align-middle mt-[15px] gap-[30px]">
            <div
                className="flex justify-evenly gap-[30px] rounded-[4px] h-[45px] p-[10px] border border-[#EEEEEE] w-[128px]">
                <button className="text-[22px]" onClick={() => quantityControl("-")}>-</button>
                <p>{quantity}</p>
                <button className="text-[20px]" onClick={() => quantityControl("+")}>+</button>
            </div>
            <button className="border-[2px] hover:bg-gray-200 w-[428px] border-black justify-center"
                    onClick={checkVerify}
            >Add to cart
            </button>
        </div>
    );
};

export default QuantityShop;