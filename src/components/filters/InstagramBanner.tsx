import instagramMan from "../../assets/imageins.png";
import instagramWoman from "../../assets/image (1)inst.png";
import instagramWoman1 from "../../assets/image (2)inst.png";
import instagramMan1 from "../../assets/image (3)inst.png";
import instagramWoman2 from "../../assets/image (4)inst.png";
import instagramMan2 from "../../assets/image (5)inst.png";
import instagramWoman3 from "../../assets/image (6)inst.png";

const InstagramBanner = () => {
    return (
        <section className="bg-gray-100 pt-[150px] text-center  flex flex-col items-center  ">
            <h3 className="font-volkhov h-[50px]  text-[46px] text-[#484848]">Follow Us On Instagram</h3>
            <p className="font-Poppins  text-[#8A8A8A] w-[614px] leading-[24px] pt-[30px]">Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin
                aliquam sem. Scelerisque duis ultrices sollicitudin
            </p>
            <div className="pt-[100px] pb-[150px] flex items-center">
                <img className="w-[232px] h-[250px]" src={instagramMan} alt="man"/>
                <img className="w-[190px] h-[324px]" src={instagramWoman} alt="woman"/>
                <img className="w-[232px] h-[250px]" src={instagramWoman1} alt="woman"/>
                <img className="w-[190px] h-[324px]" src={instagramMan1} alt="man"/>
                <img className="w-[232px] h-[250px]" src={instagramWoman2} alt="woman"/>
                <img className="w-[190px] h-[324px]" src={instagramMan2} alt="woman"/>
                <img className="w-[232px] h-[250px]" src={instagramWoman3} alt="woman"/>
            </div>
        </section>
    );
};

export default InstagramBanner;