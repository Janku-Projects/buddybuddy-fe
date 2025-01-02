import { FC } from "react";
import { CancelBtn, TimeArea, TimerContainer, TimerWrapper } from "@/components/Buddy/BuddyTimer/BuddyTimer.styled";
import { formatTime, generalInterface } from "@/Util/util";
import { useDispatch } from "react-redux";
import { clearAction, setAction } from "@/store/slices/actionSlice";
import Timer from "@/components/Timer";

interface iTimerProps extends generalInterface {

}

const Index: FC<iTimerProps> = ({}) => {
    const dispatch = useDispatch();

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const onEndTimer = () => {

    }


    const handleCancelAction = () => {
        console.log("onClick:: ")
        dispatch(clearAction());
    }



    return (
        <TimerWrapper>
            <TimerContainer>
                <TimeArea>
                    <span className="txt">남은시간</span>
                    <span className="time">
                        <Timer onEnd={onEndTimer}  min={3} second={0}/>
                    </span>
                </TimeArea>
                <CancelBtn onClick={handleCancelAction}>취소하기</CancelBtn>
            </TimerContainer>
        </TimerWrapper>
    );
};

export default Index;