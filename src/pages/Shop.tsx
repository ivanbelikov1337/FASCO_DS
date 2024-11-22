import BannerWithSpecialAdvice from "../components/banners/BannerWithSpecialAdvice.tsx";
import InstagramBanner from "../components/filters/InstagramBanner.tsx";
import Filters from "../components/filters/Filters.tsx";
import ShopCard from "../components/ShopCard.tsx";
import BasketButton from "../components/BasketButton.tsx";


const Shop = () => {
    return (
        <main className="mt-[60px] ">
            <h1 className="text-[42px] h-[50px] grid place-content-center text-center font-volkhov">Fashion</h1>
            <section className="mt-[60px] gap-4 flex justify-center">
                <Filters/>
                <ShopCard/>
            </section>
            <BannerWithSpecialAdvice/>
            <InstagramBanner/>
            <BasketButton/>
        </main>
    );
};

export default Shop;