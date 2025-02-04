import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { theme } from "@/styles/theme";
import Icon from "@/components/Common/Icon";
import Button from "@/components/Button";


const IntroContainer = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
  button {
    position: fixed;
    bottom: 1.6rem;
  }
`;

const Intro = () => {
    const navigate = useNavigate();

    return (
        <IntroContainer>
            <Icon icon="FitBuddy_3D" width={236} height={52} fill={theme.colors.primary} />
            <Button size="large" onClick={() => navigate("/login")}>
                시작하기
            </Button>
        </IntroContainer>
    );
};

export default Intro;
