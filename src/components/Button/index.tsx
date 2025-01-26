import React from "react";
import { iCustomButtonProps, StyledButton } from "@/components/Button/Button.styled";

const CustomButton = ({
                    children,
                    onClick,
                    type = "button",
                    color = "primary",
                    size,
                    btnType = "round",
                    disabled,
                    className
                }: iCustomButtonProps) => {
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

export default CustomButton;