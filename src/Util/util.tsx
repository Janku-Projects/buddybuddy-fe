import { CSSProperties } from "react";

export interface generalInterface {
    style?: CSSProperties | null;
};


export const getEnumValue = (target, value) => {

}


export const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export const importAll = (r: any) => {
    return r.keys().map((key: any) => {
        const path = r(key);
        const name = key.replace("./", "").replace(/\.(png|jpe?g|svg)$/, "");
        return { path, name };
    });
};