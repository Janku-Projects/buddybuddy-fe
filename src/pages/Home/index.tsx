import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { setAuth, setLastLogin } from "@/store/slices/authSlice";
import dayjs from "dayjs";


const Home = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.auth);


    // SECT: MOUNTED
    useEffect(() => {
        if (userData?.name === "") {
            const payload = {
                name: "tester",
                createdDate: dayjs("Sat, 14 Dec 2024 14:47:23 GMT").toString(),
                lastLoginInDate: dayjs(new Date()).toString(),
            };
            dispatch(setAuth(payload));
        } else {
            dispatch(setLastLogin(dayjs(new Date()).toString()))
        }
    }, []);


    return (
        <>Hello</>
    );
};

export default Home;