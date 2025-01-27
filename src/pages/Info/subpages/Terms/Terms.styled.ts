import styled from "styled-components";

export const TermsWrapper = styled.div`
    padding: 16px
`;

export const TermsText = styled.p`
    font-weight: ${({theme}) => theme.fontWeights.medium};
    font-size: ${({theme}) => theme.fontSize.sm};
    line-height: 130%;
    white-space: pre-line;
`;
