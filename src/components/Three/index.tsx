import { Canvas } from "@react-three/fiber";
import LightController from "@/components/Three/LightController";
import OrbitController from "@/components/Three/OrbitController";
import Model from "@/components/Three/Model";
import { FC } from "react";


interface iThree {
    fileName: string;
}

const Three: FC<iThree> = ({ fileName }) => {
    return (
        <Canvas camera={{ position: [0, 0, 3], fov: 30 }}>


            <LightController/>
            <OrbitController/>
            <Model fileName={fileName}/>
        </Canvas>
    );
};


export default Three;