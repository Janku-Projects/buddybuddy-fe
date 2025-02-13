import styled from "styled-components";

export const MyInfoSetupWrapper = styled.div`
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
    margin-top: 1rem;
    flex: 3;
`;

export const InputBox = styled.div`
    margin: 1.2rem 0 1rem 0;

    display: flex;
    flex-direction: column;
    
    h2 {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        margin-bottom: 6px;
    }
    input {
        width: 100%;
        border: 1px solid ${({ theme }) => theme.colors.blueLight};
        height: 46px;
        border-radius: 8px;
        padding: 10px;
        font-size: 16px;
        transition: 0.2s;
    }
    input:focus {
        border-color: ${({ theme }) => theme.colors.blueGrey30};
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.primaryLight};
    }
    .validation {
        margin-top: 4px;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        color: red;
    }
`;

export const CheckBox = styled.div`
    margin: 3rem  0;
    h2 {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        margin: 1rem 0;
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

////////////////////////////////////////////////////////////////

export const MyBuddySetupWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;




export const BuddySect = styled.div`
    margin-top: 1rem;
    flex: 3;
    

`;

export const BuddyBox = styled.div`
    margin: auto;
`;







