import slider from "../../assets/imageSlider.png";

const BannerWithSpecialAdvice = () => {
    return (
        <section className=" mt-[150px] overflow-hidden  relative ">
            <div className="flex justify-between">
                <img className="w-[900px]" src={slider} alt="slider"/>
                <div
                    className="skew-x-[-16deg] left-[-110px] relative border-l-[2px] border-black  bg-[#DADADA] h-[570px]">
                    <div className="skew-x-[16deg] w-[900px] p-[30px_0px_60px_90px] ">
                        <p className="font-Poppins text-[#767676] text-[16px]">Women Collection</p>
                        <h4 className="text-[46px] font-volkhov text-[#484848] pt-[30px]">Peaky Blinders</h4>
                        <p className="font-Poppins pt-[30px] border-b border-black w-[100px]">DESCRIPTION</p>
                        <p className="w-[515px] pt-[30px] font-Poppins text-[#767676] ">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Scelerisque duis ultrices
                            sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit
                            amet,
                            consectetur adipiscing elit. Scelerisque duis.
                        </p>
                        <div className="pt-[30px] flex gap-[15px]">
                            <p className="font-Poppins text-[#767676]">Size:</p>
                            <p className="w-[53px] h-[28px] flex justify-center rounded-[10px]
                             items-center bg-black text-white font-Poppins">M</p>
                        </div>
                        <p className="pt-[30px] font-Poppins font-medium text-[32px]">$100.00</p>
                        <button
                            className="mt-[30px] text-white drop-shadow-[0_15px_15px_gray] rounded-[10px] bg-black w-[207px] h-[56px]">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerWithSpecialAdvice;