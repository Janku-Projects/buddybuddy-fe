import HomeHandler from "@/pages/Home/Home.func";
import Buddy from "@/components/Buddy";
import { ActionNav } from "@/components/ActionNav";
import { BottomActionLabel, TopActionLabel } from "@/pages/Home/Home.def";
import useHomeFunc from "@/pages/Home/Home.func";


const Home = () => {
    const homeFunc = useHomeFunc();
    return (
        <>
            {
                homeFunc.isReady && (
                    <>
                        <ActionNav style={{zIndex: 100}} actionList={TopActionLabel(homeFunc.actionHandler)}/>
                        <Buddy buddyInfo={homeFunc.buddy}/>
                        <ActionNav style={{zIndex: 100}} actionList={BottomActionLabel(homeFunc.actionHandler)}/>
                    </>
                )

            }</>
    );
};

export default Home;