import styled from "styled-components";

interface FitdexImageRowType {
    tag: string;
}

export const FitdexWrapper = styled.div`
  padding: 8px;
  height: auto;
`;

export const FitdexContainer = styled.div`
  height: 100%;
`;

export const FitdexRow = styled.div`
  height: auto;
  margin-bottom: 20px;
  border: 0.5px solid ${({ theme }) => theme.colors.blueGrey05};
  border-radius: 8px;
  padding: 8px;
`;

export const FitdexRowHeader = styled.div`
  height: 2rem;
  margin-bottom: 1rem;

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 130%;
  }
`;

export const FitdexRowBody = styled.div`
  height: 10rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  //gap: 16px;
`;

export const FitdexImageRow = styled.div<FitdexImageRowType>`
  position: relative;
  width: 98px;
  height: 98px;

  .image-tag {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    margin: 6px;
    width: 30px;
    height: 15px;
    padding: 0 6px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    border: 0.5px solid white;

    background: ${({ theme, tag }) => {
    switch (tag) {
        case "1":
            return "rgba(0, 0, 0, 0.1)";
        case "2":
            return "rgba(0, 0, 0, 0.5)";
        default:
            return theme.colors.blueGrey90;
    }
}};

    p {
      color: ${({ theme, tag }) => {
    switch (tag) {
        case "1":
            return theme.colors.blueGrey90;
        default:
            return "#FFFFFF";
    }
}};
      font-size: 10px;
      font-weight: 800;
      line-height: 150%;
    }
  }

  img {
    width: 98px;
    height: 98px;
    border-radius: 8px;
  }
`;

export const FitdexRowDescription = styled.div`
  p {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.blueGrey03};
    padding: 4px 10px;

    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 130%;
  }
`;

export const ModalContainer = styled.div`
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #eef7ff;

  button {
    text-align: right;
  }

  :nth-of-type(2) {
    position: static;
  }
`;

export const FitdexRowHint = styled.div`
    p{
        border-radius: 8px;
        background-color: ${({ theme }) => theme.color.blueGrey03};
        padding: 4px 10px;

        font-size: ${({ theme }) => theme.fontSize.sm};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        line-height: 130%;
    }
`;