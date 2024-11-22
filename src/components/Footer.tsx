import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="mt-[50px]   border-t border-[#DEDFE1]">
            <section className="flex justify-center mt-[30px]">
                <Link to="/">
                    <h1 className="font-volkhov text-[32px] pr-[570px] ">FASCO</h1>
                </Link>
                <div className="flex">
                    <nav className="flex font-Poppins gap-[38px] items-center">
                        <Link to="/support">Support Center</Link>
                        <Link to="/invoicing">Invoicing</Link>
                        <Link to="/contract">Contract</Link>
                        <Link to="/packages">Packages</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/faq">FAQ,s</Link>
                    </nav>
                </div>
            </section>
            <p className="mt-[20px] mb-[20px] text-center text-[12px]">Develop by Belikov © 2024. All Rights Reseved.</p>
        </footer>
    );
};

export default Footer;