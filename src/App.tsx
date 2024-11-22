import {Route, Routes} from "react-router-dom";
import Header from "./components/headers/Header.tsx";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";
import Products from "./pages/Products.tsx";
import Footer from "./components/Footer.tsx";
import BannerBottom from "./components/banners/BannerBottom.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import Favorite from "./pages/Favorite.tsx";
import Order from "./pages/Order.tsx";
import Checkout from "./pages/Checkout.tsx";
import User from "./pages/User.tsx";


const App = () => {
    return (
        <div className="max-w-[1920px] overflow-y-hidden">
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/shop/:id" element={<Products/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
            <BannerBottom/>
            <Footer/>
        </div>
    );
};

export default App;