import styled from "styled-components";

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin: .6rem .7rem;
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    
    cursor: pointer;
    font-size: 14px;
    color: #444;
    width: 20px;
    height: 20px;
`;

export const CheckboxInput = styled.input`
    width: 12px;
    height: 12px;
    cursor: pointer;
    accent-color: #007bff;
    flex-shrink: 0;
`;

export const CheckboxText = styled.span`
    flex: 1;
    margin-left: 0.5rem;
    text-align: left;
    word-break: keep-all;
    width: 20px;
    height: 20px;
    font-size: ${({ theme }) => theme.fontSizes.xs};

`;
