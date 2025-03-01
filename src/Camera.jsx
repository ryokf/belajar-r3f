import { OrthographicCamera } from '@react-three/drei'
import { useControls } from 'leva'
import React from 'react'

const Camera = () => {
    const {zoom} = useControls({
        zoom: {
            value: 50,
            min: 1,
            max: 100
        }
    })

    return (
        <group>
            <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={zoom}></OrthographicCamera>
            <ambientLight intensity={1} />
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </group>
    )
}

export default Camera