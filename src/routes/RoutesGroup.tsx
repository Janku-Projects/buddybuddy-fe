import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
const RoutesGroup = () => {

    const isAuthenticated = () => {

    };

    return (
        <Routes>
            <Route path={"/"} element={<Home />}/>
            {/*<Route path={"/login"} element={<Login/>}/>*/}

        </Routes>
    );
};


export default RoutesGroup;