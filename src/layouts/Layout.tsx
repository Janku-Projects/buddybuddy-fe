import React, { FC, ReactNode } from "react";
// import { Body, Footer, Header, Wrapper } from "@/layouts/Layout.styled";
import { Body, Footer, Header, Wrapper } from "./Layout.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Icon from "@/components/Common/Icon";
import { Link, useNavigate } from "react-router-dom";

interface layoutProps {
    children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
    const navigate = useNavigate();
    const ui = useSelector((state: RootState) => state.ui)

    const handleNavigate = () => {
        console.log(111)
        navigate("/", { replace: true });
    }

    return (
        <Wrapper>
            <Header>
                <Icon
                    icon="Logo"
                    width={100}
                    height={20}
                    style={{border: "1px solid red"}}
                    onClick={handleNavigate}
                />
                {ui.header}
                {/*<ButtonWrap>*/}
                    <div style={{marginLeft: "auto"}}>
                        <Link to="info">
                            <Icon icon="IconQuestion"  width={30}/>
                        </Link>
                        <Link to="my-page">
                            <Icon icon="IconSetting" width={30}/>
                        </Link>
                    </div>
                {/*</ButtonWrap>*/}
            </Header>
            <Body>
                {children}
            </Body>
            {/*<Footer>*/}
            {/*    Footer Section*/}
            {/*</Footer>*/}
        </Wrapper>
    );
};

export default Layout;
