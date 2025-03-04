import { FC, useEffect, useState } from "react";
import { CancelBtn, TimeArea, TimerContainer, TimerWrapper } from "@/components/Buddy/BuddyTimer/BuddyTimer.styled";
import { formatTime, generalInterface, getEnumValue } from "@/Util/util";
import { useDispatch, useSelector } from "react-redux";
import { clearAction, eAction, setAction } from "@/store/slices/actionSlice";
import Timer from "@/components/Timer";
import { RootState } from "@/store/store";
import { BottomActionLabel, TopActionLabel } from "@/pages/Home/Home.def";
import { dexieDB } from "@/db/dexieDB";

interface iTimerProps extends generalInterface {

}

const a = TopActionLabel(null).map(({ key, time }) => ({ key, time: time || 0 }));
const b = BottomActionLabel(null).map(({ key, time }) => ({ key, time: time || 0 }));
const combined = [...a, ...b];

const BuddyTimer: FC<iTimerProps> = ({}) => {
    const dispatch = useDispatch();
    const { action } = useSelector((state: RootState) => state.action);
    const [userInfo, setUserInfo] = useState<any>({});
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
        // TODO:: 해당 타이머 종료 시,
    };


    const handleCancelAction = () => {
        console.log("onClick:: ");
        dispatch(clearAction());
    };

    // FUNC:: MOUNTED
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userId = localStorage.getItem("userId");
                if (!userId) return; // userId가 없으면 실행하지 않음

                const user = await dexieDB.user.get(Number(userId));
                if (user) {
                    setUserInfo(user);
                } else {
                    console.warn("User not found in DB");
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchUserInfo();
    }, []);


    useEffect(() => {
        console.log(111)
        setReady(false);
        const matchingAction = combined.find(({ key }) => key === eAction[action]);
        if (matchingAction && matchingAction.time) {
            const { tempMinutes, tempSeconds } = convertMillisecondsToMinutesAndSeconds(matchingAction.time);
            setMinutes(tempMinutes);
            setSeconds(tempSeconds);

            const isActionOngoing = async () => {
                // DESC::
                // 1. Action DB 에 isOngoing 하는 data 파악 > 있을 경우, 기존 종료
                // 2. 새로운 Action DB에 isOngoing으로 삽입
                // 3.

                const actions = await dexieDB.action
                    .where("userId").equals(+userInfo?.userId)  // Convert to number if necessary
                    .and(action => action.isCurrent === true)   // Filter isCurrent === true
                    .toArray();

                if (actions.length > 0) {
                    for (const action of actions) {
                        await dexieDB.action.update(action.actionId, { isCurrent: false });
                    }
                }
                const currentTime = new Date(); // 현재 시간
                const futureTime = new Date(currentTime.getTime() + matchingAction.time);
                const payload = {
                    isCurrent: true,
                    isDone: false,
                    startTime: currentTime.toString(),
                    endTime: futureTime.toString(),
                    userId: +userInfo?.userId || +localStorage.getItem("userId"),
                }
                dexieDB.action.add(payload);
            };
            isActionOngoing();




            setReady(true)
        }

        return () => {}
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