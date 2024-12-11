import { DefaultTheme } from "styled-components";

const calRem = (size: number) => `${size / 10}rem`;

const fontSizes = {
    xs: calRem(12), // 0.75rem
    sm: calRem(14), // 0.875rem
    md: calRem(16), // 1rem
    lg: calRem(18), // 1.125rem
    xl: calRem(20), // 1.25rem
    xxl: calRem(24), // 1.375rem
    // custom font
    title: calRem(36), // 2.25rem
};

const fontWeights = {
    medium: 500,
    semiBold: 600,
    bold: 700,
};

const colors = {
    primary: "#d3d3d3",
    primaryLight: "#F9F5FF",
    white: "#FFFFFF",
    black: "#000000",
    blue: "#0064FE",
    error: "#FF2020",
    grey80: "#424242",
    blueGrey05: "#ECEFF1",
    blueGrey03: "#F4F7F9",
    blueGrey30: "#90A4AE",
    blueGrey40: "#78909C",
    blueGrey50: "#607D8B",
    blueGrey70: "#455A64",
    blueGrey80: "#37474F",
    blueGrey90: "#263238",
    blueLight: "#eef7ff",
};

const theme: DefaultTheme = { fontSizes, fontWeights, colors };

export { theme };
