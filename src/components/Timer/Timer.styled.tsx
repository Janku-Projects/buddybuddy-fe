import styled from "styled-components";

export const TimeLeft = styled.div`
    color: ${({ theme }) => theme.colors.grey80};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 150%;
`;