import styled from "styled-components";
import { theme } from "@/styles/theme";

export const LabelBox = styled.div`
    width: 100%;
    position: absolute;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    .level {
        font-weight: 800;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ color }) => theme.colors.primary};
        background-color: #eddfff;
        border-radius: 0.4rem;
        padding: 0 0.6rem;
    }

    .name {
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        font-size: ${({ theme }) => theme.fontSizes.lg};
    }
`;
