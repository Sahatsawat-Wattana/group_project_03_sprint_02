import {useState, useRef} from "react"

import NavBar from "../components/HomeComponents/NavBar"
import Hero from "../components/HomeComponents/Hero"
import Banner from "../components/HomeComponents/Banner"
import CategorySample from "../components/HomeComponents/CategorySample";
import Footer from "../components/HomeComponents/Footer";



export default function Home() {
    const [selectedCategory,setSelectredCategory] = useState("All");
    const [selectedPayment,setSelectedPayment] = useState("QR");
    const [cartItems,setCartItems] = useState([]);
    const [likeItems,setLikeItems] = useState([]);
    const [purchasedItems,setPurchasedItems] = useState([]);
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [isShelfOpen,setIsShelfOpen] = useState(false);
    const [isLogin,setIsLogin] = useState(false);
    const [isRegister,setIsRegister] = useState(false);
    const [isPaid,setIsPaid] = useState(false);
    const [isConfirmedOrder,setIsconfirmedOrder] = useState(false);
    const [isConfirmedPayment,setIsConfirmedPayment] = useState(false);
    const [isUseCoupon,setUseCoupon] = useState(false);
    const [isShowTextbox,setIsShowTextbox] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
    const slideHeroRef = useRef(null);
    const slideCategoryRef = useRef(null);
    const slideLikeRef = useRef(null);
    const slidePurchased = useRef(null);

    const CATEGORIES = ["All",...new Set(Bookdata.map((book) => book.category))]

    const activeCategory = Bookdata.filter((book) => selectedCategory === "All" || book.category === selectedCategory);

    const highlightBook = Bookdata.filter((book) => book.is_highlighted === "true");

    
    const handleCategory = (newCategory) => {
        setSelectredCategory(newCategory);
    }
    

    return (
        <NavBar />
        <Hero />
        <Banner />
        <CategorySample />
        <Footer />
    );
}