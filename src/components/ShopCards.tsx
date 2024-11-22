import {FC} from "react";
import {IDataShopCard} from "../utility/data.ts";
import {NavLink} from "react-router-dom";


const ShopCards: FC<IDataShopCard> = ({ballColor, img,id, price, title}) => {

    return (
        <NavLink  to={`/shop/${id}`} className="p-1 w-[295px] h-[530px] bg-gray-50 rounded-[10px]">
            <img className="rounded-[10px]" src={img} alt=""/>
            <h4 className="font-volkhov text-[16px] pt-[15px]">{title}</h4>
            <p className="font-Poppins text-[16px] pt-[15px]">${price}</p>
            <div className="flex gap-[5px] mt-[15px]">
                {ballColor.map((el:string) => (
                    <div key={Math.random()} style={{backgroundColor: el}} className={`rounded-full w-[26px] h-[26px]`}/>
                ))}
            </div>
        </NavLink>
    );
};

export default ShopCards;