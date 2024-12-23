import styled from "styled-components";

export const Container = styled.div<{ color: any }>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: 1rem;

  progress[value] {
    appearance: none;
    flex: 1;
    height: 100%;

    &::-webkit-progress-bar {
      height: 1rem;
      border-radius: 5rem;
      background-color: ${({ theme }) => theme.colors.blueGrey03};
      border: 1px solid ${({ theme }) => theme.colors.blueGrey05};
    }

    &::-webkit-progress-value {
      height: 1rem;
      border-radius: 5rem;
      background-color: ${({ color }) => color};
    }
  }
`;
