import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Icon from "@/components/Test/icon";
import Setting from "@/pages/Setting";
import Info from "@/pages/Info";
import MyInfo from "@/pages/Info/subpages/MyInfo";
import Fitdex from "@/pages/Info/subpages/Fitdex";
import History from "@/pages/Info/subpages/History";
import Terms from "@/pages/Info/subpages/Terms";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import AuthRoute from "@/routes/AuthRoute";
import Intro from "@/pages/Home/intro";
const RoutesGroup = () => {
    const { userData } = useSelector((state: RootState) => state.auth);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(!!userData) setLoggedIn(true)
    }, []);

    return (
        <Routes>

            <Route path={"/hello"} element={<Intro/>}/>
            <Route path={"/"} element={<AuthRoute isAuth={isLoggedIn} element={<Home/>} />}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/test/icons"} element={<Icon/>}/>
            <Route path={"/info"} element={<Info/>}/>
            <Route path={"/setting"} element={<Setting/>}/>

            <Route path={"/my-info"} element={<MyInfo/>}/>
            <Route path={"/my-fitdex"} element={<Fitdex/>}/>
            <Route path={"/history"} element={<History/>}/>
            <Route path={"/terms"} element={<Terms/>}/>

        </Routes>
    );
};


export default RoutesGroup;