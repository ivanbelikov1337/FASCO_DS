import {TimeLeft} from "./Timer.tsx";
import {useEffect, useState} from "react";
import {calculateTimeLeft} from "../../utility/data.ts";

const TimerSingleProduct = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(1));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(1));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="flex bg-[#FDEFEE] mt-[30px] rounded border border-[#F8CCCC] gap-[20px] w-[585px] justify-between p-[13px]">
            <p className="text-[#FF706B] text-[18px]"> Hurry up! Sale ends in:</p>
            <div className="flex  gap-[15px] text-[#FF706B] font-Jost">
                {["Days", "Hr", "Mins", "Sec"].map((interval) => (
                    <div key={interval} className="text-center flex">
                        <p className="text-[20px]">
                            {timeLeft[interval as keyof TimeLeft] < 10
                                ? `0${timeLeft[interval as keyof TimeLeft]}`
                                : timeLeft[interval as keyof TimeLeft]}
                        </p>
                        {interval !== "Sec" && <p className="pl-4">:</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimerSingleProduct;