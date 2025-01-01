import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { setHeader } from "@/store/slices/uiSlice";
import { setAction } from "@/store/slices/actionSlice";

const HomeHandler = () => {
    const dispatch = useDispatch();
    const buddy = useSelector((state: RootState) => state.buddy);
    const [isReady, setReady] = useState<boolean>(false);
    const { action } = useSelector((state: RootState) => state.action);


    const getBuddy = () => {
        const payload = {};

        return payload;
    };

    const actionHandler = (params) => {
        console.log("current action : ", action);
        console.log("change action : ", params);
        dispatch(setAction(params));
    }



    // SECT: MOUNTED > Buddy check
    useEffect(() => {
        if (!buddy.data || !buddy.buddy) {
            const buddy = getBuddy();
        }
        dispatch(setHeader("메인페이지")); // 헤더 확인
        setReady(true); // 화면 준비
    }, []);



    return {
        isReady,
        actionHandler
    };
};

export default HomeHandler;