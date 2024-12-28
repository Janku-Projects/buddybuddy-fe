import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Icon from "@/components/Test/icon";
const RoutesGroup = () => {

    return (
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/test/icons"} element={<Icon/>}/>

        </Routes>
    );
};


export default RoutesGroup;