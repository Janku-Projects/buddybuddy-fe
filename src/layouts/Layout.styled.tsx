import styled from "styled-components";


export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    main {
        flex: 1;
        overflow-y: auto;
    }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; /* Full viewport height */
    font: ${(props) => props.theme.colors.primary};
    border: 1px solid blue;
`;

export const Header = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: row;
    width: 100%;
    color: black;
    align-items: center;
    //text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
`;

export const Body = styled.main`
    flex: 1; /* Take up remaining space */
    background-color: #f9f9f9;
    padding: 2rem;
    font-size: 1rem;
    color: #333;
    border: 1px solid red;
    overflow-y: auto; /* Ensure content is scrollable if it overflows */
`;

export const Footer = styled.footer`
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 1rem;
`;

export const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    margin-left: auto;
    a {
        display: flex;
    }
`;
