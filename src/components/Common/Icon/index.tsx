import { generalInterface } from "@/Util/util";
import { FC } from "react";

interface iIconProps extends generalInterface {
    icon: string;
    width?: number;
    height?: number;
}

const Icon: FC<iIconProps> = ({icon, width, height}) => {
    return (
        <>

        </>
    );
};


export default Icon;