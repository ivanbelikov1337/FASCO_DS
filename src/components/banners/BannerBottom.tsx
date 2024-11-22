import man from "../../assets/image 2.png";
import woman from "../../assets/image 3.png";

const BannerBottom = () => {
    return (
        <div className="pt-[150px] grid justify-center">
            <section className=" flex gap-[30px]">
                <img src={man} alt="man"/>
                <div className="w-[632px] mt-[187px] flex items-center flex-col">
                    <h3 className="text-[46px] text-[#484848] font-Volkhov">Subscribe To Our Newsletter</h3>
                    <p className="pt-[20px] text-gray-500 text-center w-[550px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Scelerisque duis ultrices sollicitudin
                        aliquam sem. Scelerisque duis ultrices sollicitudin
                    </p>
                    <input
                        className="pt-[28px] mt-[30px] w-[631px] drop-shadow-[0_180px_180px]  font-Poppins text-[22px] p-[30px_0_30px_30px]"
                        type="email" placeholder="email"/>
                    <button className="w-[207px] mt-[32px] h-[56px] rounded-[10px] bg-black text-white">Subscribe Now
                    </button>
                </div>
                <img src={woman} alt="woman"/>
            </section>
        </div>
    );
};

export default BannerBottom;