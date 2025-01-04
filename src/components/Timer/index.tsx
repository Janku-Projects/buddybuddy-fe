import { FC, useEffect, useRef, useState } from "react";
import { TimeLeft } from "@/components/Timer/Timer.styled";
import { useDispatch } from "react-redux";
import { clearAction } from "@/store/slices/actionSlice";

interface iTimer {
    onEnd: () => void;
    min: number;
    second: number;
}


const Timer: FC<iTimer> = ({ onEnd, min, second }) => {
    const MINUTES_IN_MS: number = min * 60 * 1000 + second * 1000;
    const INTERVAL: number = 1000;
    const timerRef = useRef<HTMLDivElement>(null);
    const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);
    const dispatch = useDispatch();


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - INTERVAL);
        }, INTERVAL);

        if (timeLeft <= 0) {
            clearInterval(timer);
            onTimerEnd();
            onEnd();
        }

        return () => clearInterval(timer);

    }, [timeLeft]);


    const formatTime = (time: number) => String(Math.floor(time)).padStart(2, '0');
    const leftMinutes = formatTime(timeLeft / (1000 * 60) % 60);
    const leftSeconds = formatTime((timeLeft / 1000) % 60);


    const onTimerEnd = () => {
        if (timerRef.current) {
            timerRef.current.classList.add("blink");
            timerRef.current.style.color = 'red';
            setTimeout(() => {
                dispatch(clearAction());
            }, 2000);
        }
    };

    return (
        <TimeLeft ref={timerRef}>
            {leftMinutes} : {leftSeconds}
        </TimeLeft>
    );
};

export default Timer;
