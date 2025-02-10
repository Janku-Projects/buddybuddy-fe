import styled from "styled-components";

export const LoginWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;


export const TopSect = styled.div`

`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 130%;
    color: ${({ theme }) => theme.colors.blueGrey90};
    margin-bottom: 6px;
`;

export const Subtitle = styled.ul`
    margin-bottom: 16px;
    padding-left: 1.5rem;
    li {
        list-style: circle;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        color: ${({ theme }) => theme.colors.blueGrey50};
        line-height: 130%;
    }
`;

export const MidSect = styled.div`
    margin-top: 1.5rem;
    flex: 3;
`;

export const InputBox = styled.div`
    margin: 1rem 0;
    h2 {
        // 글자
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        line-height: 100%;
    }
    input {
        margin-top: 16px;
        width: 100%;
        border: 0.5px solid lightgray;
        height: 46px;
        border-radius: 8px;
        margin-bottom: 10px;

        // 글자
        font-size: 16px;
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        line-height: 130%;
        padding: 10px;
    }
`;


export const BottomSect = styled.div`


    button {
        width: 100%;
        height: 46px;
        margin-bottom: 10px;
        border-radius: 8px;
        font-weight: ${({ theme }) => theme.fontWeights.bold};

    }

`;


export const ButtonWrap = styled.button``;
