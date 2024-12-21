import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

/* eslint-disable react/no-unknown-property */
const Box = () => {
    const meshRef = useRef()

    useFrame(() => {
        meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    })
    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial wireframe={true} />
        </mesh>
    )
}

export default Box