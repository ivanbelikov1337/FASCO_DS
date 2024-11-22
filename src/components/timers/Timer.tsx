import {useEffect, useState} from "react";
import {calculateTimeLeft} from "../../utility/data.ts";


export interface TimeLeft {
    Days: number;
    Hr: number;
    Mins: number;
    Sec: number;
}

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(6));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(6));
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="flex mt-[25px] gap-[30px]">
            {["Days", "Hr", "Mins", "Sec"].map((interval) => (
                <div key={interval} className="text-center">
                    <p className="bg-white w-[76px] h-[70px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] text-center p-5
                            text-[32px] text-[#484848] rounded-[10px]">
                        {timeLeft[interval as keyof TimeLeft] < 10
                            ? `0${timeLeft[interval as keyof TimeLeft]}`
                            : timeLeft[interval as keyof TimeLeft]}
                    </p>
                    <p className="pt-[20px] font-Poppins text-[24px] text-[#484848]">{interval.charAt(0).toUpperCase() + interval.slice(1)}</p>
                </div>
            ))}
        </div>
    );
};

export default Timer;