import { useFrame } from '@react-three/fiber'
import React from 'react'

const Cube = () => {
    const cubeRef = React.useRef()

    // useFrame is a hook that allows you to schedule a function to be called at each frame rendered by the renderer.
    // The function takes two arguments: state and delta. state is an object containing information about the current state of the renderer, delta is the time in seconds since the last frame.
    // useFrame is a good place to put code that should be updated every frame, such as updating the rotation of an object.
    useFrame((state, delta) => {
        cubeRef.current.rotation.x += delta
        cubeRef.current.rotation.y += delta
    })

    return (
        <group>
            <mesh ref={cubeRef}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
            <mesh position={[2, 2, -5]}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </group>
    )
}

export default Cube