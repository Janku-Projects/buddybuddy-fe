import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { colorMapping } from "@/components/Three/config/colors";
import * as THREE from "three";


import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Model = ({ fileName }) => {
	// const obj = useLoader(OBJLoader, `models/chicken_lv_1.obj`);
	const obj = useLoader(OBJLoader, `models/${fileName}.obj`);

	const [isReady, setIsReady] = useState(false);
	const ref = useRef();
	const [rotation, setRotation] = useState(0);
	const [isDragging, setIsDragging] = useState(false);

	useLayoutEffect(() => {
		obj.traverse((child) => { // 자식 요소를 순회하는 함수
			if (child?.isMesh) { // 메시(mesh) 객체를 식별 > "겉면"을 구성하는 기본 단위
				let newMaterial = child.material.clone();

				// 캐릭터 url 마다 색상 설정 변경 (olorMapping[fileName]을 통해 fileName별로 정의된 색상 데이터)
				const colors = colorMapping[fileName];
				if (colors) {
					const meshIndex = parseInt(child.name.replace("meshes[", "").replace("]", ""), 10);
					if (!isNaN(meshIndex) && colors[meshIndex] !== undefined) {
						newMaterial.color.set(colors[meshIndex]);
					}
				}
				// 정의된 색상 데이터를 가져옴
				child.material = newMaterial;
			}
		});
	}, [obj, fileName]);

	// SECT:: 모델이 씬(Scene)의 원점에 정렬.
	useEffect(() => {
		if (ref.current) {
			const box = new THREE.Box3().setFromObject(ref.current); // 3D 객체의 Bounding Box를 계산
			const center = new THREE.Vector3();
			box.getCenter(center); // 델의 중심 좌표를 계산
			ref.current.position.sub(center); // 중심을 (0, 0, 0)으로 이동
			ref.current.rotation.y = THREE.MathUtils.degToRad(rotation);
		}
	}, [obj, rotation]);


	const handlePointerDown = (payload) => {
		console.log("payload check:: ", payload);

	};

	const handlePointerMove = (payload) => {
		console.log("payload check:: ", payload);

	};

	const handlePointerUp = (payload) => {
		console.log("payload check:: ", payload);
	};

	const handlePointerLeave = (payload) => {
		console.log("payload check:: ", payload);
	};


	return ( <group
		ref={ ref }
		onPointerDown={ handlePointerDown }
		onPointerMove={ handlePointerMove }
		onPointerUp={ handlePointerUp }
		onPointerLeave={ handlePointerLeave }
	>
		<primitive object={ obj }/>
	</group> );

};

export default Model;