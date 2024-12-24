import { Canvas } from "@react-three/fiber";
import LightController from "@/components/Three/LightController";
import OrbitController from "@/components/Three/OrbitController";
import Model from "@/components/Three/Model";
import { FC } from "react";
import { generalInterface } from "@/Util/util";


interface iThree extends generalInterface{
    fileName: string;
}

const Three: FC<iThree> = ({ fileName, style }) => {
    return (
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }} style={style}>
            <LightController/>
            <OrbitController/>
            <Model fileName={fileName}/>
        </Canvas>
    );
};


export default Three;