import styled from "styled-components";

export const TimerWrapper = styled.div`
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
`;

export const TimerContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    padding: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.blueGrey03};
    border-radius: 8px;
    flex-direction: row;
    gap: 10rem; 
`;

export const TimeArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    .txt {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-weight: ${({ theme }) => theme.fontWeights.semiBold};
        color: ${({ theme }) => theme.colors.blueGrey50};
    }

    .time {
        font-weight: ${({ theme }) => theme.fontWeights.bold};
    }
`;
export const CancelBtn = styled.button`
    border-radius: 5rem;
    padding: 0.4rem 1.2rem;
    background-color: ${({ theme }) => theme.colors.blueGrey05};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
