import { CSSProperties } from "react";

export interface generalInterface {
    style?: CSSProperties | null;
};


export const getEnumValue = (target, value): number => {
    if (!target || value === undefined || value === null) return 0;
    console.log(112, Object.values(target))
    const enumValue = Object.values(target).find((item) => item === value);
    return typeof enumValue === "number" ? enumValue : 0;
}
