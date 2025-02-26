import styled from "styled-components";

const WeeklyContainer = styled.div`
  position: relative;
  z-index: 2;
  padding: 0.6rem 1.6rem 1.6rem 1.6rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 1rem 1rem 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;

  visibility: hidden;
  opacity: 0;
  transition: 0.25s;
  z-index: 2;

  &.on {
    visibility: visible;
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
  position: fixed;
  padding: 0.6rem 1.6rem 1.6rem 1.6rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 1rem 1rem 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  visibility: hidden;
  z-index: 10;
  transition: 0.25s;

  &.on {
    visibility: visible;
    opacity: 1;
  }

  &.off {
    transform: translateY(100%);
  }
`;

const DetailBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.blueGrey05};
  border-radius: 0.6rem;
  padding: 0.8rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    line-height: 130%;
    margin-top: 0.6rem;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.blue};
  }

  button {
    background-color: ${({ theme }) => theme.color.blueGrey05};
    border-radius: 5rem;
    padding: 0.4rem 1.2rem;
  }
`;

const WorkoutWrap = styled.div`
  background-color: ${({ theme }) => theme.color.blueGrey03};
  padding: 1rem;
  border-radius: 0.4rem;
  margin-top: 0.8rem;

  .workout-detail {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-top: 1rem;
  }

  .label {
    color: ${({ theme }) => theme.color.blueGrey50};
  }
  .value {
    color: ${({ theme }) => theme.color.blueGrey70};
  }
`;

export { WeeklyContainer, Overlay, Container, DetailBox, Top, WorkoutWrap };
