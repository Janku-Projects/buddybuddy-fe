import styled from "styled-components";


export const SettingWrapper = styled.div`
    padding: 0.8rem;
    height: 100%;
`;


export const SettingContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    Button {
        width: 100%;
        border-radius: 8px;
    }
`;

export const NicknameSect = styled.div`
`;


export const CellphoneSect = styled.div`


`;

export const EmailSect = styled.div`
    flex: 1;

`;


export const FooterSect = styled.div`
    flex: 0;

    Button {
        width: 100%;
        border-radius: 8px;
    }
`;


export const InputBox = styled.input`
    margin: 10px 0;
    width: 100%;
    border: 0.5px solid lightgray;
    height: 46px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.blueGrey05};

    // 글자
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 130%;
    padding: 10px;
`;

export const TitleBox = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.blueGrey90};
    line-height: 150%;
`;