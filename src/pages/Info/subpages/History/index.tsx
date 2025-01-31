import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeader } from "@/store/slices/uiSlice";
import { EmptyData } from "@/components/Empty/EmptyData";

const History = () => {
    const dispatch = useDispatch();
    const [historyList, setHistoryList] = useState([]);
    useEffect(() => {
        dispatch(setHeader("행동기록"));
    }, [dispatch]);

    return (
        <>
            {
                historyList.length > 0
                    ? <ul></ul>
                    : <EmptyData/>
            }

        </>
    );
};

export default History;