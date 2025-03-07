import HomeHandler from "@/pages/Home/Home.func";
import Buddy from "@/components/Buddy";
import { ActionNav } from "@/components/ActionNav";
import { BottomActionLabel, TopActionLabel } from "@/pages/Home/Home.def";
import useHomeFunc from "@/pages/Home/Home.func";
import { dexieDB } from "@/db/dexieDB";
import { setGainBuddyInfo } from "@/store/slices/buddySlice";
import { useDispatch } from "react-redux";


const Home = () => {
    const homeFunc = useHomeFunc();
    const dispatch = useDispatch();

    const handleAction = async (payload) => {
        // TODO:: []로 나누기

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
            console.log("onGoingAction::: ", onGoingAction)
        } else {
            // 진행중인 액션이 없는경우
            console.log("Hello")
        }
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