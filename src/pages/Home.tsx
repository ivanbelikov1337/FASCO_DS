import Collage from "../components/Collage.tsx";
import Brand from "../components/Brand.tsx";
import Discount from "../components/Discount.tsx";
import CardsClothes from "../components/CardsClothes.tsx";
import BannerWithSpecialAdvice from "../components/banners/BannerWithSpecialAdvice.tsx";
import InstagramBanner from "../components/filters/InstagramBanner.tsx";
import BasketButton from "../components/BasketButton.tsx";




const Home = () => {


    return (
        <main className="mt-[94px]">
            <Collage/>
            <Brand/>
            <Discount/>
            <CardsClothes/>
            <BannerWithSpecialAdvice/>
            <InstagramBanner/>
            <BasketButton/>
        </main>
    );
};

export default Home;