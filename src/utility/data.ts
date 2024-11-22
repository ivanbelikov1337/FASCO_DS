import photo from "../assets/44_df90161a-7172-4fac-869a-c6af02c86d12.jpg.png"
import photo1 from "../assets/45.jpg.png"
import photo2 from "../assets/46_145a4ab0-7b97-409a-b049-3768fd0e7a10.jpg.png"
import photo3 from "../assets/49_ecfb9d65-a392-40b1-b9fb-f62e5a84f812.jpg.png"
import photo4 from "../assets/52_bec0360d-64e5-4b79-bb88-9b2dc30f34a2.jpg.png"
import photo5 from "../assets/57.jpg.png"
import photo6 from "../assets/59.jpg.png"
import photo7 from "../assets/53_bc12317d-e941-4097-9fd8-cc529c2b0cf1.jpg.png"
import photo8 from "../assets/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg.png"
import {TimeLeft} from "../components/timers/Timer.tsx";
import {IDataOrder, IDataShopCard} from "./types.ts";



export const dataShopCard: IDataShopCard[] = [
    {
        id: 0,
        img: photo,
        title: "Dotted Black Dress",
        price: 20,
        ballColor: ["#063E66", "#000000", "#B1C5D4"],
    },
    {
        id: 1,
        img: photo1,
        title: "Rounded Red Hat",
        price: 9,
        ballColor: ["#FFD700", "#000000"],
    },
    {
        id: 2,
        img: photo2,
        title: "Linen-blend Shirt",
        price: 17,
        ballColor: ["#8DB4D2", "#FFD1DC"],
    },
    {
        id: 3,
        img: photo3,
        title: "Long-sleeve Coat",
        price: 106,
        ballColor: ["#EBE6DB", "#C1E1C1"],
    },
    {
        id: 4,
        img: photo4,
        title: "Boxy Denim Hat",
        price: 20,
        ballColor: ["#C1E1C1", "#000000"],
    },
    {
        id: 5,
        img: photo5,
        title: "Linen Plain Top",
        price: 25,
        ballColor: ["#FFD1DC", "#C6AEC7", "#FFFFFF"],
    },
    {
        id: 6,
        img: photo6,
        title: "Oversized T-shirt",
        price: 11,
        ballColor: ["#000000", "#836953"],
    },
    {
        id: 7,
        img: photo7,
        title: "Polarised Sunglasses",
        price: 18,
        ballColor: ["#C6AEC7", "#BEDCE3"],
    }, {
        id: 8,
        img: photo8,
        title: "Rockstar Jacket",
        price: 19,
        ballColor: ["#063E66", "#000000", "#B1C5D4"],
    }
]

export const dataFilterSize = ["S", "M", "L", "XL"]
export const dataFilterColor = ["#FFD1DC", "#000000", "#FFD700", "#9BFF6C", "#6CFF9E", "#6CFFDC", "#6CB9FF", "#6CF6FF", "#C6AEC7", "#6C7BFF", "#8A6CFF", "#063E66", "#FC6CFF", "#FF6C6C"]
export const dataFilterPrice = ["$00-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"]
export const dataFilterBrands = ["Minimog", "Retrolie", "Brook", "Learts", "Vagabond", "Abby"]
export const dataFilterCollections = ["All products", "Best sellers", "New arrivals", "Accessories"]
export const dataFilterTags = ["Fashion", "Hats", "Sandal", "Belt", "Bags", "Snacker", "Denim", "Minimog", "Vagabond", "Sunglasses", "Beachwear"]

export const formatTextToNumber = (str:string) => {
  return  str.split("-").map(el => +el.substring(1) )
}

export  const calculateTimeLeft = (num: number): TimeLeft => {
    const countDownDate = new Date(`Oct ${new Date().getDate() + num}, 2024 00:00:00`).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const timeLeft: TimeLeft = {
        Days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        Hr: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        Sec: Math.floor((distance % (1000 * 60)) / 1000),
    };

    return distance > 0 ? timeLeft : {Days: 0, Hr: 0, Mins: 0, Sec: 0};
};


export const getRandomInt = (max:number) => {
    return Math.floor(Math.random() * max)
}


export const getTotalSum = (data: IDataOrder[]) => data.reduce((acc, val) => acc + val.price, 0)