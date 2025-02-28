import { useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

const Lighting = () => {
    const lightRef = React.useRef()
    useHelper(lightRef, THREE.DirectionalLightHelper, 1, 'red')

    useFrame((state, delta)=> {
        lightRef.current.position.x += delta * Math.sin(state.clock.elapsedTime) * 5
        lightRef.current.position.z += delta * Math.cos(state.clock.elapsedTime) * 5 
    })

    return (
        <group>
            <ambientLight intensity={1} />
            <directionalLight castShadow ref={lightRef} position={[0, 2, 0]} />
            <mesh castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color='blue' />
            </mesh>
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial color='lime' />
            </mesh>
        </group>
    )
}

export default Lighting