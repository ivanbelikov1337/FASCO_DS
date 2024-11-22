import woman3 from "../assets/Images.png";
import stars from "../assets/stars.png";
import woman4 from "../assets/Images (1)4.png";
import woman5 from "../assets/Images (2)3.png";
import woman6 from "../assets/Images (3).png";
import woman7 from "../assets/Images (4).png";
import woman8 from "../assets/Images (5).png";

const CardsClothes = () => {
    return (
        <section className="pt-[152px] flex flex-col items-center ">
            <h3 className="font-volkhov text-[40px] text-[#484848]">New Arrivals</h3>
            <p className="font-Poppins text-[16px] text-center text-[#8A8A8A] w-[614px] pt-[30px]">Lorem ipsum dolor
                sit amet,
                consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin
                aliquam sem. Scelerisque duis ultrices sollicitudin
            </p>
            <div className="flex gap-[30px]">
                <button
                    className="mt-[50px]  rounded-[10px] text-[#8A8A8A] bg-[#FAFAFA] w-[207px] h-[56px]">
                    Men’s Fashion
                </button>
                <button
                    className="mt-[50px] text-white drop-shadow-[0_15px_15px_gray] rounded-[10px] bg-black w-[207px] h-[56px]">
                    Women’s Fashion
                </button>
                <button
                    className="mt-[50px] text-[#8A8A8A] bg-[#FAFAFA] rounded-[10px]  w-[207px] h-[56px]">
                    Women Accessories
                </button>
                <button
                    className="mt-[50px] text-[#8A8A8A] bg-[#FAFAFA]rounded-[10px]  w-[207px] h-[56px]">
                    Men Accessories
                </button>
                <button
                    className="mt-[50px] text-[#8A8A8A] bg-[#FAFAFA] rounded-[10px]  w-[207px] h-[56px]">
                    Discount Deals
                </button>
            </div>
            <div className="mt-[50px] grid gap-[61px] grid-cols-3 grid-rows-2">
                <div className="w-[386px] bg-[#FAFAFA] p-[15px_25px_0_25px] h-[438px] rounded-[10px]">
                    <img src={woman3} alt="woman"/>
                    <div className="flex justify-between pt-[15px]">
                        <h4 className="text-[#484848] text-[20px] font-Poppins font-medium">Shiny Dress</h4>
                        <img className="h-[19px]" src={stars} alt="stars"/>
                    </div>
                    <p className="font-medium font-Poppins text-[#8A8A8A] text-[12px]">Al Karam</p>
                    <p className="pt-[25px] text-[#484848] text-[12px] font-Poppinsp font-medium">(4.1k) Customer
                        Reviews</p>
                    <div className="flex justify-between pt-[25px]">
                        <p className="text-[#484848] font-medium font-Poppins text-[24px]">$95.50</p>
                        <p className="text-[#FF4646] text-[12px] font-Poppins">Almost Sold Out</p>
                    </div>
                </div>
                <div className="w-[386px] p-[15px_25px_0_25px] h-[438px] rounded-[10px]  bg-[#FAFAFA]">
                    <img src={woman4} alt="woman"/>
                    <div className="flex justify-between pt-[15px]">
                        <h4 className="text-[#484848] text-[20px] font-Poppins font-medium">Long Dress</h4>
                        <img className="h-[19px]" src={stars} alt="stars"/>
                    </div>
                    <p className="font-medium font-Poppins text-[#8A8A8A] text-[12px]">Al Karam</p>
                    <p className="pt-[25px] text-[#484848] text-[12px] font-Poppinsp font-medium">(4.1k) Customer
                        Reviews</p>
                    <div className="flex justify-between pt-[25px]">
                        <p className="text-[#484848] font-medium font-Poppins text-[24px]">$95.50</p>
                        <p className="text-[#FF4646] text-[12px] font-Poppins">Almost Sold Out</p>
                    </div>
                </div>
                <div className="w-[386px] p-[15px_25px_0_25px] h-[438px] rounded-[10px]  bg-[#FAFAFA]">
                    <img src={woman5} alt="woman"/>
                    <div className="flex justify-between pt-[15px]">
                        <h4 className="text-[#484848] text-[20px] font-Poppins font-medium">Full Sweater</h4>
                        <img className="h-[19px]" src={stars} alt="stars"/>
                    </div>
                    <p className="font-medium font-Poppins text-[#8A8A8A] text-[12px]">Al Karam</p>
                    <p className="pt-[25px] text-[#484848] text-[12px] font-Poppinsp font-medium">(4.1k) Customer
                        Reviews</p>
                    <div className="flex justify-between pt-[25px]">
                        <p className="text-[#484848] font-medium font-Poppins text-[24px]">$95.50</p>
                        <p className="text-[#FF4646] text-[12px] font-Poppins">Almost Sold Out</p>
                    </div>
                </div>
                <div className="w-[386px] p-[15px_25px_0_25px] h-[438px] rounded-[10px]  bg-[#FAFAFA]">
                    <img src={woman6} alt="woman"/>
                    <div className="flex justify-between pt-[15px]">
                        <h4 className="text-[#484848] text-[20px] font-Poppins font-medium">White Dress</h4>
                        <img className="h-[19px]" src={stars} alt="stars"/>
                    </div>
                    <p className="font-medium font-Poppins text-[#8A8A8A] text-[12px]">Al Karam</p>
                    <p className="pt-[25px] text-[#484848] text-[12px] font-Poppinsp font-medium">(4.1k) Customer
                        Reviews</p>
                    <div className="flex justify-between pt-[25px]">
                        <p className="text-[#484848] font-medium font-Poppins text-[24px]">$95.50</p>
                        <p className="text-[#FF4646] text-[12px] font-Poppins">Almost Sold Out</p>
                    </div>
                </div>
                <div className="w-[386px] p-[15px_25px_0_25px] h-[438px] rounded-[10px]  bg-[#FAFAFA]">
                    <img src={woman7} alt="woman"/>
                    <div className="flex justify-between pt-[15px]">
                        <h4 className="text-[#484848] text-[20px] font-Poppins font-medium">Colorful Dress</h4>
                        <img className="h-[19px]" src={stars} alt="stars"/>
                    </div>
                    <p className="font-medium font-Poppins text-[#8A8A8A] text-[12px]">Al Karam</p>
                    <p className="pt-[25px] text-[#484848] text-[12px] font-Poppinsp font-medium">(4.1k) Customer
                        Reviews</p>
                    <div className="flex justify-between pt-[25px]">
                        <p className="text-[#484848] font-medium font-Poppins text-[24px]">$95.50</p>
                        <p className="text-[#FF4646] text-[12px] font-Poppins">Almost Sold Out</p>
                    </div>
                </div>
                <div className="w-[386px] p-[15px_25px_0_25px] h-[438px] rounded-[10px]  bg-[#FAFAFA]">
                    <img src={woman8} alt="woman"/>
                    <div className="flex justify-between pt-[15px]">
                        <h4 className="text-[#484848] text-[20px] font-Poppins font-medium">White Shirt</h4>
                        <img className="h-[19px]" src={stars} alt="stars"/>
                    </div>
                    <p className="font-medium font-Poppins text-[#8A8A8A] text-[12px]">Al Karam</p>
                    <p className="pt-[25px] text-[#484848] text-[12px] font-Poppinsp font-medium">(4.1k) Customer
                        Reviews</p>
                    <div className="flex justify-between pt-[25px]">
                        <p className="text-[#484848] font-medium font-Poppins text-[24px]">$95.50</p>
                        <p className="text-[#FF4646] text-[12px] font-Poppins">Almost Sold Out</p>
                    </div>
                </div>
            </div>
            <button
                className="mt-[50px] text-[white] font-Poppins bg-[black] rounded-[10px]  w-[207px] h-[56px]">
                View More
            </button>
        </section>
    );
};

export default CardsClothes;