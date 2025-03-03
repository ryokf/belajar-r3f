import { Center, Html, Text, Text3D } from '@react-three/drei'
import React from 'react'

const TextHtml = () => {
    const cubeRef = React.useRef()

    return (
        <>
            <Text>Halo 2D</Text>
            <Center>
                <Text3D position={[0, -1, 0]} font={'./font/Poppins.json'}>
                    Halo 3D
                    <meshNormalMaterial />
                </Text3D>
            </Center>

            <mesh ref={cubeRef} position={[1.5, -1, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color='blue' />
                <Html position={[0, 0, -0.75]} wrapperClass='text-white text-2xl' distanceFactor={5} occlude={[cubeRef]}>Blue</Html>
            </mesh>

            <mesh position={[-1.5, -1, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color='red' />
            </mesh>


        </>
    )
}

export default TextHtml