import Timer from "./timers/Timer.tsx";
import woman from "../assets/image.png";
import woman1 from "../assets/image (1).png";
import woman2 from "../assets/image (2).png";

const Discount = () => {
    return (
        <section className="bg-[#FAFAFA] flex justify-end pt-[155px] pb-[143px]">
            <div className="pr-[120px]">
                <div>
                    <h3 className="font-volkhov text-[46px] h-[50px] flex items-center text-[#484848]">Deals Of The
                        Month</h3>
                    <p className="font-Poppins text-[#8A8A8A] pt-[30px] w-[436px] leading-[26px]">Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Scelerisque duis
                        ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
                    </p>
                    <button
                        className="mt-[40px] text-white drop-shadow-[0_15px_15px_gray] rounded-[10px] bg-black w-[207px] h-[56px]">
                        Buy Now
                    </button>
                </div>
                <div className="pt-[50px]">
                    <h4 className="font-Poppins text-[28px] text-[#484848] font-medium">Hurry, Before It’s Too
                        Late!</h4>
                </div>
                <Timer/>
            </div>
            <div className="flex gap-[24px]">
                <img className="h-[500px] w-[320px]" src={woman} alt="woman"/>
                <img className="h-[426px] w-[282px]" src={woman1} alt="woman"/>
                <img className="h-[426px] w-[182px]" src={woman2} alt="woman"/>
            </div>
        </section>
    );
};

export default Discount;