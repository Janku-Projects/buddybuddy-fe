import { FC, SVGAttributes } from "react";
import * as icons from "@/components/Common/Icon/Icons.def";

interface iIconProps extends SVGAttributes<SVGElement> {
    icon: keyof typeof icons | string;
    width: number;
    height?: number;
    fill?: string;
}

const Icon: FC<iIconProps> = ({ icon, width = 24, height = 24, fill = "none", ...props }) => {
    const SVGIcon = icons[icon]; // Resolve the icon dynamically

    if (!SVGIcon) {
        console.error(`Icon "${icon}" does not exist in the icons object.`);
        return (<></>);
    }
    // @ts-ignore
    return <SVGIcon width={width} height={height} fill={fill} stroke={"black"} strokeWidth={"2px"} {...props} />;
};


export default Icon;