import HomeHandler from "@/pages/Home/Home.func";
import Buddy from "@/components/Buddy";
import { ActionNav } from "@/components/ActionNav";
import { BottomActionLabel, TopActionLabel } from "@/pages/Home/Home.def";
import useHomeFunc from "@/pages/Home/Home.func";
import { dexieDB } from "@/db/dexieDB";
import { setGainBuddyInfo } from "@/store/slices/buddySlice";
import { useDispatch } from "react-redux";
import { eAction } from "@/store/slices/actionSlice";
import { useState } from "react";

const a = TopActionLabel(null).map(({ key, time }) => ({ key, time: time || 0 }));
const b = BottomActionLabel(null).map(({ key, time }) => ({ key, time: time || 0 }));
const combined = [...a, ...b];

const Home = () => {
    const homeFunc = useHomeFunc();
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState<any>({});

    const handleAction = async (payload) => {
        const userId = localStorage.getItem("userId");
        if (!userId) return; // userId가 없으면 실행하지 않음
        const user = await dexieDB.user.get(Number(userId));
        if (user) {
            setUserInfo(user);
        } else {
            console.warn("User not found in DB");
        }

        if (payload.gain) {
            const { key, value } = payload.gain;
            dispatch(setGainBuddyInfo({ [key]: value }));
        }

        if (payload.minus) {
            const { key, value } = payload.minus;
            dispatch(setGainBuddyInfo({ [key]: value }));
        }

        // TODO::
        payload.handlerAction();


        const onGoingAction = await dexieDB.action.get("isCurrent");
        if(!!onGoingAction) {
            // 진행중인 액션이 있는 경우
            await dexieDB.action.update(onGoingAction.actionId, {isCurrent: false});
        }

        const currentTime = new Date(); // 현재 시간
        const futureTime = new Date(currentTime.getTime() + payload.time);
        const params  = {
            isCurrent: true,
            isDone: false,
            startTime: currentTime.toString(),
            endTime: futureTime.toString(),
            userId: +userInfo?.userId || +localStorage.getItem("userId"),
        }
        await dexieDB.action.add(payload);

    }

    return (
        <>
            {
                homeFunc.isReady && (
                    <>
                        <ActionNav style={{zIndex: 100}} actionList={TopActionLabel(homeFunc.actionHandler)} onClick={handleAction}/>
                        <Buddy buddyInfo={homeFunc.buddy}/>
                        <ActionNav style={{zIndex: 100}} actionList={BottomActionLabel(homeFunc.actionHandler)} onClick={handleAction}/>
                    </>
                )

            }</>
    );
};

export default Home;