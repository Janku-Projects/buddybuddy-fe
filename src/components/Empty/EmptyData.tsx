import styled from "styled-components";

export const EmptyData = () => {
    return <Container>no data</Container>;
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dddddd;
`;
