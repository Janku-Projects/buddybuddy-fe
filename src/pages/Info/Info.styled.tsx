import styled from "styled-components";

const NicknameBox = styled.div`
    margin: 1rem 1.6rem;
    padding: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    button {
        padding: 0.4rem 1.2rem;
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.blueGrey05};
        border-radius: 5rem;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
    }
`;

export const MenuBox = styled.li`
    padding: 1.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.blueGrey03};
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.blueGrey90};
    line-height: 150%;

`;