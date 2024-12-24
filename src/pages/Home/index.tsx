import HomeHandler from "@/pages/Home/Home.func";
import Buddy from "@/components/Buddy";
import { ActionNav } from "@/components/ActionNav";


const Home = () => {
    const {
        isReady // 화면 ready
    } = HomeHandler();


    return (
        <>
            {
                isReady && (
                    <>
                        <Buddy/>
                        <ActionNav style={{zIndex: 100}}/>
                    </>
                )

            }</>
    );
};

export default Home;