import { Canvas } from "@react-three/fiber";
import LightController from "@/components/Three/LightController";
import OrbitController from "@/components/Three/OrbitController";
import Model from "@/components/Three/Model";
import { FC, useEffect } from "react";
import { generalInterface } from "@/Util/util";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


interface iThree extends generalInterface{
    fileName: string;
}

const Three: FC<iThree> = ({ fileName, style }) => {
    // const {fov} = useSelector((state: RootState) => state.model);



    return (
        <Canvas camera={{ position: [0, 0, 3], fov: 15 }} style={style}>
            <LightController/>
            <OrbitController/>
            <Model fileName={fileName}/>
        </Canvas>
    );
};


export default Three;