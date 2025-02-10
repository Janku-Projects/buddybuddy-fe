import { jsx } from "@emotion/react";
import Element = jsx.JSX.Element;
import { FC } from "react";
import { Navigate } from "react-router-dom";
import Intro from "@/pages/Home/intro";


interface iAuthRouteProps {
    element: Element;
    isAuth: boolean;
}

const AuthRoute = ({ element, isAuth }: iAuthRouteProps) => {
    return isAuth ? element: <Navigate to={"/intro"}/>
};

export default AuthRoute;