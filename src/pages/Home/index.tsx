import HomeHandler from "@/pages/Home/Home.func";
import Buddy from "@/components/Buddy";
import { ActionNav } from "@/components/ActionNav";
import { BottomActionLabel, TopActionLabel } from "@/pages/Home/Home.def";


const Home = () => {
    const {
        isReady,
        handleModel,
        handleBuddyData,
        actionHandler// 화면 ready
    } = HomeHandler();




    return (
        <>
            {
                isReady && (
                    <>
                        <ActionNav style={{zIndex: 100}} actionList={TopActionLabel(actionHandler)}/>
                        <button onClick={handleModel}>CLICK</button>
                        {/*<button onClick={handleBuddyData}>CLICK</button>*/}
                        <Buddy />
                        <ActionNav style={{zIndex: 100}} actionList={BottomActionLabel(actionHandler)}/>
                    </>
                )

            }</>
    );
};

export default Home;