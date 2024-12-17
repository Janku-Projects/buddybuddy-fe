import { FC } from "react";
import { BuddyWrapper } from "@/components/Buddy/Buddy.styled";
import { Canvas } from "@react-three/fiber";

import LightController from "@/components/Model/LightController";
import OrbitController from "@/components/Model/OrbitController";

interface iBuddy {

}

const Buddy: FC<any> = ({ fileName, isComponent = false, isShowLabel = true, level = 1, name = "" }) => {


    return (
        <BuddyWrapper>
            <Canvas camera={{ position: [0, 0, 3], fov: isComponent ? 15 : 30 }}>

                <LightController/>
                <OrbitController/>
            </Canvas>
        </BuddyWrapper>
    );
};

export default Buddy;


