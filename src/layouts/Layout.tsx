import React, { FC, ReactNode } from "react";
// import { Body, Footer, Header, Wrapper } from "@/layouts/Layout.styled";
import { Body, Footer, Header, Wrapper } from "./Layout.styled";

interface layoutProps {
    children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
    return (
        <Wrapper>
            <Header>
                Header Section
            </Header>
            <Body>
                {children}
            </Body>
            <Footer>
                Footer Section
            </Footer>
        </Wrapper>
    );
};

export default Layout;
