import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blueGrey03};

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    flex-direction: column;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .action {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  .date {
    color: ${({ theme }) => theme.colors.blueGrey40};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  .mp {
    color: ${({ theme }) => theme.colors.blue};
  }

  .hp {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const IconBox = styled.div`
  background: ${({ theme }) => theme.colors.blueGrey03};
  border-radius: 0.4rem;
  padding: 0.5rem;
  margin-right: 1rem;
  display: flex;
`;

export { ListItem, IconBox };
