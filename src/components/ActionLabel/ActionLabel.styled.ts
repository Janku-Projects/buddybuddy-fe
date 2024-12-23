import styled from "styled-components";

export const ActionLabelBox = styled.div`
    width: 100%;
    position: absolute;
    top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    
`;


export const GaugeArea = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.blueGrey05}
`;
