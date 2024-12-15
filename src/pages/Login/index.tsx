import LoginHandler from "@/pages/Login/Login.func";
import { useEffect } from "react";

const Login = () => {
    const { isLoggedIn, navigate } = LoginHandler();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/"); // Redirect to "/"
        }
    }, [isLoggedIn, navigate]);

    return (<></>);
};

export default Login;