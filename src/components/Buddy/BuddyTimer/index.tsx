import { FC, useEffect, useState } from "react";
import { CancelBtn, TimeArea, TimerContainer, TimerWrapper } from "@/components/Buddy/BuddyTimer/BuddyTimer.styled";
import { formatTime, generalInterface, getEnumValue } from "@/Util/util";
import { useDispatch, useSelector } from "react-redux";
import { clearAction, eAction, setAction } from "@/store/slices/actionSlice";
import Timer from "@/components/Timer";
import { RootState } from "@/store/store";
import { BottomActionLabel, TopActionLabel } from "@/pages/Home/Home.def";

interface iTimerProps extends generalInterface {

}

const a = TopActionLabel(null).map(({ key, time }) => ({ key, time: time || 0 }));
const b = BottomActionLabel(null).map(({ key, time }) => ({ key, time: time || 0 }));
const combined = [...a, ...b];

const BuddyTimer: FC<iTimerProps> = ({}) => {
    const dispatch = useDispatch();
    const { action } = useSelector((state: RootState) => state.action);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isReady, setReady] = useState(false);

    const convertMillisecondsToMinutesAndSeconds = (milliseconds: number) => {
        const totalSeconds = Math.floor(milliseconds / 1000); // 밀리초를 초로 변환
        const tempMinutes = Math.floor(totalSeconds / 60); // 초를 분으로 변환
        const tempSeconds = totalSeconds % 60; // 나머지 초 계산
        return { tempMinutes, tempSeconds };
    };

    const onEndTimer = () => {

    };


    const handleCancelAction = () => {
        console.log("onClick:: ");
        dispatch(clearAction());
    };

    useEffect(() => {
        setReady(false);
        const matchingAction = combined.find(({ key }) => key === eAction[action]);
        if (matchingAction && matchingAction.time) {
            const { tempMinutes, tempSeconds } = convertMillisecondsToMinutesAndSeconds(matchingAction.time);
            setMinutes(tempMinutes);
            setSeconds(tempSeconds);
            setTimeout(() => setReady(true))
        }
    }, [action]);


    return (
        <TimerWrapper>
            {
                isReady && (
                    <TimerContainer>
                        <TimeArea>
                            <span className="txt">남은시간</span>
                            <span className="time">
                                <Timer onEnd={onEndTimer} min={minutes} second={seconds}/>
                            </span>
                        </TimeArea>
                        <CancelBtn onClick={handleCancelAction}>취소하기</CancelBtn>
                    </TimerContainer>
                )
            }
        </TimerWrapper>
    );
};

export default BuddyTimer;