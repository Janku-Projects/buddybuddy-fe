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

    const handleModel = (buddy: any) => {
        console.log("handleModel:: ", buddy?.originalId)
        // setIsLoading(true);
        let tempBuddyName = null;
        switch ( buddy?.originalId){
            case 1:
                tempBuddyName="chicken_lv_1";
                break;
            case 2:
                tempBuddyName="monster_lv_1";
                break;
            case 3:
                tempBuddyName="=otter_lv_1";
                break;
        }
        dispatch(setModel(tempBuddyName));
        setIsLoading(false);
    }

    const handleBuddyData = () => {
        dispatch(setGainBuddyInfo({hunger: 10}));
    }


    const getBuddy = async () => {
        const payload = {};
        const userId: number = +localStorage.getItem("userId");
        const userInfo = await dexieDB.user.get(userId);
        const buddyInfo = await dexieDB.buddy?.get(+userInfo?.currentBuddyId);
        setBuddy(buddyInfo);
        handleModel(buddyInfo);
        setReady(true); // 화면 준비
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
        getBuddy();

    }, []);



    return {
        isReady,
        handleBuddyData,
        handleModel,
        actionHandler,
        buddy, setBuddy,
    };
};

export default HomeHandler;