import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { setHeader, setIsLoading } from "@/store/slices/uiSlice";
import { setAction } from "@/store/slices/actionSlice";
import { setModel } from "@/store/slices/modelSlice";
import { setGainBuddyInfo } from "@/store/slices/buddySlice";

const HomeHandler = () => {
    const dispatch = useDispatch();
    const buddy = useSelector((state: RootState) => state.buddy);
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


    const getBuddy = () => {
        const payload = {};

        return payload;
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

        if (!buddy.buddyInfo || !buddy.buddy) {
            const buddy = getBuddy();
        }
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