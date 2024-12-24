import styled from "styled-components";

export  const Container = styled.ul`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 1.6rem;
  padding: 1.6rem 0;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
`;

export const Box = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.blueGrey80};
`;
