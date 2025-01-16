import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
    /** 버튼 안의 내용 */
    children?: React.ReactNode;
    /** 버튼 클릭 시 호출할 함수 */
    onClick?: any;
    /** 버튼 타입 설정 */
    type?: "button" | "submit" | undefined ;
    /** 버튼 색상 설정*/
    color?: "primary" | "secondary" | "dark" | "danger";
    /** 버튼 크기 설정*/
    size?: "small" | "large";
    /** 버튼 비활성화 */
    disabled?: boolean;
    /** 커스텀 속성 */
    btnType?: "round" | "square";
    className?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${({ size }) => size && SIZES[size]}
  ${({ color }) => color && COLORS[color]}
  border-radius: ${(props) => (props.btnType === "round" ? "0.8rem" : "0")};

  &.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5.6rem;
  }
`;

export const COLORS = {
    primary: css`
    background-color: #9544ff;
    &:disabled {
      background-color: #eceff1;
    }
  `,
    secondary: css`
    background-color: #eceff1;
    color: #263238;
  `,
    dark: css`
    background-color: #263238;
  `,
    danger: css`
    background-color: #ff2020;
    &:disabled {
      background-color: #eceff1;
    }
  `,
};

export const SIZES = {
    large: css`
    width: 328px;
    height: 56px;
  `,
    small: css`
    width: 220px;
    height: 200px;
  `,
};