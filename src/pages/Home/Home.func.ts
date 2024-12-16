import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { setHeader } from "@/store/slices/uiSlice";

const HomeHandler = () => {
    const dispatch = useDispatch();
    const buddy = useSelector((state: RootState) => state.buddy);
    const [isReady, setReady] = useState<boolean>(false);

    const getBuddy = () => {
        const payload = {};

        return payload;
    };

    // SECT: MOUNTED > Buddy check
    useEffect(() => {
        if (!buddy.data || !buddy.buddy) {
            const buddy = getBuddy();
        }
        dispatch(setHeader("Home Page")); // 헤더 확인
        setReady(true); // 화면 준비
    }, []);

    return {
        isReady
    };
};

export default HomeHandler;