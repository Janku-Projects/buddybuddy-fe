import styled from "styled-components";

export const TermsWrapper = styled.div`
    padding: 16px;
    font-weight: ${({theme}) => theme.fontWeights.medium};
    font-size: ${({theme}) => theme.fontSizes.xs};
    line-height: 180%;
    white-space: pre-line;
`;

