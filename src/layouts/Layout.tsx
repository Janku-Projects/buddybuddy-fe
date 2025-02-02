import React, { FC, ReactNode } from "react";
// import { Body, Footer, Header, Wrapper } from "@/layouts/Layout.styled";
import { Body, Footer, Header, Wrapper, ButtonWrap } from "./Layout.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Icon from "@/components/Common/Icon";
import { Link, useNavigate } from "react-router-dom";

interface layoutProps {
    children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
    const navigate = useNavigate();
    const ui = useSelector((state: RootState) => state.ui);


    const handleNavigate = () => {
        navigate("/");
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Wrapper>
            <Header>
                {
                    ui.header !== ''
                        ? <Icon
                            icon="IconBack"
                            height={20}
                            stroke={"black"} strokeWidth={"2px"}
                            onClick={handleBack}
                        />
                        : <Icon
                            icon="Logo"
                            width={100}
                            height={20}
                            stroke={"black"} strokeWidth={"2px"}
                            onClick={handleNavigate}
                        />
                }
                <div style={{ marginLeft: "auto" }}>{ui.header}</div>
                <ButtonWrap>
                    <Link to="info">
                        <Icon icon="IconQuestion" width={20} height={20}/>
                    </Link>
                    <Link to="setting">
                        <Icon icon="IconSetting" width={20} height={20}/>
                    </Link>
                </ButtonWrap>
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
