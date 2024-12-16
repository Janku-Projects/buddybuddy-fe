import dayjs from "dayjs";
import { setAuth, setLastLogin } from "@/store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";

const LoginHandler = () => {
    const dispatch = useDispatch();
    const { userData, isLoggedIn } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const Login = () => {
        if (!isLoggedIn) {
            console.log("loggin...");
            const params = {
                name: "tester",
                createdDate: dayjs("Sat, 14 Dec 2024 14:47:23 GMT").format("YYYY-MM-DDTHH:mm:ss"),
                lastLoginInDate: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
            };
            dispatch(setAuth(params));
        } else {
            console.log("update...");
            dispatch(setLastLogin(dayjs().format("YYYY-MM-DDTHH:mm:ss")));
        }
    };
    return {
        Login,
        userData, isLoggedIn, // 로그인 정보
        navigate
    };
};

export default LoginHandler;