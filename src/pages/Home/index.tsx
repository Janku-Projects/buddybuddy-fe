import HomeHandler from "@/pages/Home/Home.func";
import Buddy from "@/components/Buddy";
import { ActionNav } from "@/components/ActionNav";
import { BottomActionLabel, TopActionLabel } from "@/pages/Home/Home.def";


const Home = () => {
    const {
        isReady,
        actionHandler// 화면 ready
    } = HomeHandler();




    return (
        <>
            {
                isReady && (
                    <>
                        <ActionNav style={{zIndex: 100}} actionList={TopActionLabel(actionHandler)}/>
                        <Buddy/>
                        <ActionNav style={{zIndex: 100}} actionList={BottomActionLabel(actionHandler)}/>
                    </>
                )

            }</>
    );
};

export default Home;