import { FC } from "react";
import { CancelBtn, TimeArea, TimerContainer, TimerWrapper } from "@/components/Timer/Timer.styled";
import { formatTime, generalInterface } from "@/Util/util";
import { useDispatch } from "react-redux";
import { clearAction, setAction } from "@/store/slices/actionSlice";

interface iTimerProps extends generalInterface {

}

const Timer: FC<iTimerProps> = ({}) => {
    const dispatch = useDispatch();

    const handleCancelAction = () => {
        console.log("onClick:: ")
        dispatch(clearAction());
    }

    return (
        <TimerWrapper>
            <TimerContainer>
                <TimeArea>
                    <span className="txt">남은시간</span>
                    <span className="time">{formatTime(180)}</span>
                </TimeArea>
                <CancelBtn onClick={handleCancelAction}>취소하기</CancelBtn>
            </TimerContainer>
        </TimerWrapper>
    );
};

export default Timer;