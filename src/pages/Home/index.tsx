import { useEffect } from "react";
import HomeHandler from "@/pages/Home/Home.func";
import Buddy from "@/components/Buddy";


const Home = () => {
    const {
        isReady // 화면 ready
    } = HomeHandler();


    return (
        <>
            {
                isReady && (
                    <Buddy/>
                )

            }</>
    );
};

export default Home;