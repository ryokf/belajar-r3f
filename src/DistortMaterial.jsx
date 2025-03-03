import { GradientTexture, MeshDistortMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { lerp } from 'three/src/math/MathUtils.js'

const DistortMaterial = () => {
    const [hover, setHover] = React.useState(false)
    const planeRef = React.useRef()

    useFrame(() => {
        if (hover) {
            planeRef.current.material.distort = lerp(planeRef.current.material.distort, 0.3, 0.1)
        } else {
            planeRef.current.material.distort = lerp(planeRef.current.material.distort, 0, 0.05)
        }
    })

    return (
        <>
            <ambientLight intensity={2} />
            <mesh ref={planeRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
                <planeGeometry args={[5, 5, 64, 64]} />
                <MeshDistortMaterial>
                    <GradientTexture stops={[0, 1]} colors={['aqua', 'blue']}></GradientTexture>
                </MeshDistortMaterial>
            </mesh>
        </>
    )
}

export default DistortMaterial