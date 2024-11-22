import chanel from "../assets/logo.png";
import louisVuitton from "../assets/logo (1).png";
import prada from "../assets/logo (2).png";
import calvinKlein from "../assets/logo (3).png";
import denim from "../assets/logo (4).png";

const Brand = () => {
    return (
        <section className="flex gap-[70px] pt-[109px] pb-[86px] justify-center">
            <img src={chanel} alt="chanel"/>
            <img src={louisVuitton} alt="louis vuitton"/>
            <img src={prada} alt="prada"/>
            <img src={calvinKlein} alt="calvin klein"/>
            <img src={denim} alt="denim"/>
        </section>
    );
};

export default Brand;