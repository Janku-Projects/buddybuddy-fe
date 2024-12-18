import { FC, Suspense } from "react";
import { BuddyWrapper } from "@/components/Buddy/Buddy.styled";
import { Canvas } from "@react-three/fiber";

import LightController from "@/components/Three/LightController";
import OrbitController from "@/components/Three/OrbitController";
import { Loader } from "@react-three/drei";
import Model from "@/components/Three/Model";
import Three from "@/components/Three";

interface iBuddy {
    // fileName: string;
    // isShowLabel?: false;
    // level?: number;
    // name ?: string;

}

const Buddy: FC<any> = ({ fileName = 'chicken_lv_1', isShowLabel = true, level = 1, name = "" }) => {


    return (
        <BuddyWrapper>
            <Three fileName={fileName}/>
        </BuddyWrapper>
    );
};

export default Buddy;


