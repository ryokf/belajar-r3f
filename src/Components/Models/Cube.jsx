import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

/* eslint-disable react/no-unknown-property */
const Cube = () => {
    const meshRef = useRef();
    const [isCliked, setIsClicked] = useState(false);
    
    useFrame(() => {
        if  (isCliked) {
            meshRef.current.rotation.x += 0.05;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh 
            ref={meshRef} 
            onClick={() => setIsClicked(!isCliked)} 
            position={[0, 0, 0]}
            castShadow
            
        >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
};

export default Cube;