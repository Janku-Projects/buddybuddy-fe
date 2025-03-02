import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { setHeader, setIsLoading } from "@/store/slices/uiSlice";
import { setAction } from "@/store/slices/actionSlice";
import { setModel } from "@/store/slices/modelSlice";
import { setGainBuddyInfo } from "@/store/slices/buddySlice";
import { dexieDB } from "@/db/dexieDB";

const HomeHandler = () => {
    const dispatch = useDispatch();
    const [buddy, setBuddy] = useState<any>(null);
    const [isReady, setReady] = useState<boolean>(false);

    const { action } = useSelector((state: RootState) => state.action);

    const handleModel = () => {
        setIsLoading(true);
        dispatch(setModel("monster_lv_1"));

        setIsLoading(false);
    }

    const handleBuddyData = () => {
        dispatch(setGainBuddyInfo({hunger: 10}));

    }


    const getBuddy = async () => {
        const payload = {};
        const userId = localStorage.getItem("userId");
        const userInfo = await dexieDB.user.get(userId);
        console.log("userInfo:: ", userInfo)
        if(!userInfo || !userInfo?.currentBuddyId){
            return false;
        }
        const buddyInfo = await dexieDB.buddy?.get(userInfo?.currentBuddyId)
        console.log(112, buddyInfo)
    };

    const actionHandler = (params) => {
        console.log("current action : ", action);
        console.log("change action : ", params);
        if(params === "CALL"){
            // dispatch(setModel({ fov: 10 }));
        } else {
            dispatch(setAction(params));
        }

    }



    // SECT: MOUNTED > Buddy check
    useEffect(() => {
        dispatch(setHeader("")); // 헤더 확인

        // if (!buddy.buddyInfo || !buddy.buddy) {
        getBuddy();
        // }




        setReady(true); // 화면 준비
    }, []);



    return {
        isReady,
        handleBuddyData,
        handleModel,
        actionHandler
    };
};

export default HomeHandler;