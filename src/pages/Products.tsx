import Discount from "../components/Discount.tsx";
import BannerWithSpecialAdvice from "../components/banners/BannerWithSpecialAdvice.tsx";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import eye from "../assets/SVG.svg"
import {dataFilterSize} from "../utility/data.ts";
import compare from "../assets/SVG1.svg"
import question from "../assets/Vector.svg"
import share from "../assets/Vector (1).svg"
import delivery from "../assets/Vector (2).svg"
import returns from "../assets/Vector (3).svg"
import trustbag from "../assets/trustbag.png.png"
import {setIndexSize, setIndexColor} from "../store/slices/productsSlice.ts";

import QuantityShop from "../components/QuantityShop.tsx";
import TimerSingleProduct from "../components/timers/TimerSingleProduct.tsx";
import AddToFavorite from "../components/AddToFavorite.tsx";
import {useEffect, useState} from "react";
import BasketButton from "../components/BasketButton.tsx";

const Products = () => {
    const {shopData} = useAppSelector(state => state.shop)
    const {efects} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const data = shopData.find((el) => el.id === +id!)
    const [verifyColor, setVerifyColor] = useState(false)
    const [verifySize, setVerifySize] = useState(false)

    const [selectedSize, setSelectedSize] = useState("")
    const [selectedColor, setSelectedColor] = useState("")

    const handleSelectedSize = (i: number, size: string) => {
        dispatch(setIndexSize(i))
        setSelectedSize(size)
    }

    const handleSelectedColor = (i: number, size: string) => {
        dispatch(setIndexColor(i))
        setSelectedColor(size)
    }

    const makeVerify = () => {
        if (!selectedSize) setVerifySize(true)
        if (!selectedColor) setVerifyColor(true)
    }
    useEffect(() => {
        setVerifyColor(false)
        setVerifySize(false)
    }, [selectedColor])


    if (!data) return <div>Loading</div>

    return (
        <main className="mt-[80px] gap-[100px]">
            <section className="flex justify-center gap-[80px]">
                <img src={data.img} className="w-[400px] h-[550px]" alt="woman"/>
                <div className="font-volkhov">
                    <p className="text=[14px] text-[#666666]">Fasco</p>
                    <div className="flex pt-[30px] justify-between items-center">
                        <p className="text-[30px] ">{data.title}</p>
                        <AddToFavorite data={data}/>
                    </div>
                    <p className="pt-[30px] text-[24px]">${data.price}</p>
                    <div className="flex  gap-[8px] pt-[30px]">
                        <img src={eye} alt="eye"/>
                        <p className="text-[#8A8A8A] text-[16px] ">{data.id! + 13} people are viewing this right now</p>
                    </div>
                    <TimerSingleProduct/>
                    <p className="text-[16px] mt-[30px] font-Jost text-[#666666]">Only <b>{data.id! + 1}</b> item(s)
                        left in stock!</p>
                    <div className="flex">
                        <p className="font-bold mt-[30px]">Size:</p>
                        {verifySize && (
                            <i className="font-bold pl-[25px] text-red-500 mt-[30px]">Pleas selected color</i>)}
                    </div>
                    <div className="pt-[15px] flex gap-[10px]">
                        {dataFilterSize.map((el, i) =>
                            <span key={i}
                                  onClick={() => handleSelectedSize(i, el)}
                                  className="text-[16px] text-black w-[42px] h-[42px]  items-center border-[#8A8A8A]
                                      border rounded-[5px] flex  justify-center cursor-pointer"
                                  style={{
                                      backgroundColor: efects.indexSize === i ? 'black' : '',
                                      color: efects.indexSize === i ? 'white' : ''
                                  }}>{el}
                            </span>)}
                    </div>
                    <div className="flex">
                        <p className="font-bold mt-[30px]">Color:</p>
                        {verifyColor && (
                            <i className="font-bold pl-[25px] text-red-500 mt-[30px]">Pleas selected color</i>)}
                    </div>
                    <div className="mt-[15px] flex gap-[5px]">
                        {data.ballColor.map((el, i) =>
                            <span key={i}
                                  onClick={() => {
                                      handleSelectedColor(i, el)
                                  }}
                                  className={`border-[3px] cursor-pointer caret-transparent bg-gray-500 w-[30px] h-[30px] rounded-full `}
                                  style={{
                                      border: efects.indexColor === i ? '2px solid gray' : '',
                                      backgroundColor: el,
                                  }}
                            />
                        )}
                    </div>
                    <p className="font-bold mt-[30px]">Quantity</p>
                    <QuantityShop
                        makeVerify={makeVerify}
                        selectedSize={selectedSize}
                        selectedColor={selectedColor}
                        data={data}
                    />
                    <div className="flex gap-[35px] mt-[70px] font-Jost border-b-[1px] pb-[18px] border-gray-200">
                        <div className="flex gap-[8px]">
                            <img src={compare} alt="compare"/>
                            <p>Compare</p>
                        </div>
                        <div className="flex gap-[5px]">
                            <img src={question} alt="question"/>
                            <p>Ask a question</p>
                        </div>
                        <div className="flex gap-[8px]">
                            <img src={share} alt="Share"/>
                            <p>Share</p>
                        </div>
                    </div>
                    <div className="flex pt-[30px] gap-[8px]">
                        <img src={delivery} alt="Delivery"/>
                        <p>Estimated Delivery:</p>
                        <p className="font-Jost text-[16px]">Jul 30 - Aug 03</p>
                    </div>
                    <div className="flex pt-[15px] gap-[8px]">
                        <img src={returns} alt="Returns"/>
                        <p>Free Shipping & Returns:</p>
                        <p className="font-Jost text-[16px]">On all orders over $75</p>
                    </div>
                    <div className="bg-[#F8F8F8] grid mt-[30px] justify-center p-[20px]">
                        <img src={trustbag} alt="trustbag"/>
                        <p className="mt-[20px] text-center font-bold">Guarantee safe & secure checkout</p>
                    </div>
                </div>
            </section>
            <BannerWithSpecialAdvice/>
            <Discount/>
            <BasketButton/>
        </main>
    );
};

export default Products;