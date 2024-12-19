import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { colorMapping } from "@/components/Three/config/colors";
import * as THREE from "three";


import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Model = ({ fileName }) => {
	// const obj = useLoader(OBJLoader, `models/chicken_lv_1.obj`);
	const obj = useLoader(OBJLoader, `models/${ fileName }.obj`);
	const ref = useRef();
	const [isDragging, setIsDragging] = useState(false);
	const [rotationX, setRotationX] = useState(0); // X-axis rotation
	const [rotationY, setRotationY] = useState(0); // Y-axis rotation (previously just "rotation")
	const animationFrameId = useRef(null); // To store the animation frame ID

	useEffect(() => {
		if (ref.current) {
			const box = new THREE.Box3().setFromObject(ref.current); // Bounding box
			const center = new THREE.Vector3();
			box.getCenter(center);
			ref.current.position.sub(center); // Center the model at (0, 0, 0)

			// Apply both rotations
			ref.current.rotation.y = THREE.MathUtils.degToRad(rotationY); // Yaw
			ref.current.rotation.x = THREE.MathUtils.degToRad(rotationX); // Pitch
		}
	}, [obj, rotationX, rotationY]);
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
	useEffect(() => {
		if (isDragging) {
			cancelAnimationFrame(animationFrameId.current);
			animationFrameId.current = null;
		} else {
			const targetX = 0;
			const targetY = 0;
			const animateReturn = () => {
				setRotationX((prevX) => {
					const newX = prevX + ( targetX - prevX ) * 0.1; // Smooth interpolation
					if (Math.abs(newX - targetX) < 0.01) return targetX; // Stop when close enough
					return newX;
				});

				setRotationY((prevY) => {
					const newY = prevY + ( targetY - prevY ) * 0.1; // Smooth interpolation
					if (Math.abs(newY - targetY) < 0.01) return targetY; // Stop when close enough
					return newY;
				});

				// Check if animation should continue
				if (
					Math.abs(rotationX - targetX) > 0.01 ||
					Math.abs(rotationY - targetY) > 0.01
				) {
					animationFrameId.current = requestAnimationFrame(animateReturn);
				}
			};
			animationFrameId.current = requestAnimationFrame(animateReturn);
		}
	}, [isDragging]);


	const handlePointerMove = (event) => {
		if (isDragging) {
			const deltaX = event.movementX * 0.2;
			const deltaY = event.movementY * 0.2;

			setRotationY((prev) => ( prev + deltaX ) % 360); // Yaw
			setRotationX((prev) => Math.max(-90, Math.min(90, prev + deltaY))); // Pitch
		}
	};


	return (
		<>
			<group
				rotation={ [
					THREE.MathUtils.degToRad(rotationX),
					THREE.MathUtils.degToRad(rotationY),
					0,
				] }
				onPointerDown={ () => setIsDragging(true) }
				onPointerUp={ () => setIsDragging(false) }
				onPointerLeave={ () => setIsDragging(false) }
				onPointerMove={ handlePointerMove }
			>
				<primitive object={ obj }/>
			</group>
		</>
	);

};

export default Model;