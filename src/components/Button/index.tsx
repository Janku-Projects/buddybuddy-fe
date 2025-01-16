import React from "react";
import { ButtonProps, StyledButton } from "@/components/Button/Button.styled";

const Button = ({
                    children,
                    onClick,
                    type = "button",
                    color = "primary",
                    size,
                    btnType = "round",
                    disabled,
                    className
                }: ButtonProps) => {
    return (
        <StyledButton
            className={className}
            type={type}
            size={size}
            btnType={btnType}
            color={color}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
};

export default Button;