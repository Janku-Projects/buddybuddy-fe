import React, { FC, ReactNode } from "react";
// import { Body, Footer, Header, Wrapper } from "@/layouts/Layout.styled";
import { Body, Footer, Header, Wrapper } from "./Layout.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface layoutProps {
    children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
    const ui = useSelector((state: RootState) => state.ui)

    return (
        <Wrapper>
            <Header>
                {ui.header}
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
