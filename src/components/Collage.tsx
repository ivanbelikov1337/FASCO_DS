import firstMan from "../assets/image 2 28.png";
import firstWoman from "../assets/images (1).png";
import secondWoman from "../assets/images (2).png";
import secondMan from "../assets/image 227.png";
import {NavLink} from "react-router-dom";

const Collage = () => {
    return (
        <section className="flex justify-center gap-[35px]">
            <div className="bg-[#E0E0E0] w-[375px] h-[756px] flex rounded-[10px] items-end">
                <img src={firstMan} alt="man"/>
            </div>
            <div>
                <div className="bg-[#E0E0E0] w-[426px] h-[152px] flex rounded-[10px] items-end">
                    <img src={firstWoman} alt="woman"/>
                </div>
                <div className="h-[453px] flex flex-col justify-center items-center gap-[15px]">
                    <h1 className="text-[#484848] pt-[65px]  h-[91px] text-[91px] font-Poppins font-medium">ULTIMATE</h1>
                    <h2 id="Home-Collag"
                        className="font-Poppins pt-[90px] font-medium h-[187px] text-[187px] text-black">SALE</h2>
                    <p className=" text-[#484848] text-[21px] text-center font-Poppins">NEW COLLECTION</p>
                    <NavLink to="/shop"
                        className="text-white flex justify-center items-center drop-shadow-[0_15px_15px_gray] rounded-[10px] bg-black w-[207px] h-[56px]">SHOP
                        NOW
                    </NavLink>
                </div>
                <div className="bg-[#E0E0E0] justify-center w-[426px] h-[150px] flex rounded-[10px] items-end">
                    <img src={secondWoman} alt="woman"/>
                </div>
            </div>
            <div className="bg-[#E0E0E0] justify-center w-[375px] h-[756px] flex rounded-[10px] items-end">
                <img src={secondMan} alt="man"/>
            </div>
        </section>
    );
};

export default Collage;