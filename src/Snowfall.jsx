import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Snowfall = () => {
    const snowRef = useRef()

    const verticesAmount = 2000
    const positionArray = new Float32Array(verticesAmount * 3)

    for (let i = 0; i < verticesAmount * 3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 1
    }

    useFrame((state, delta) => {
        snowRef.current.rotation.y += delta * 0.09
        snowRef.current.rotation.x += delta * 0.1
    })

    return (
        <points ref={snowRef} rotation={[0, Math.PI / 4, 0]}>
            <bufferGeometry >
                <bufferAttribute
                    attach="attributes-position"
                    count={verticesAmount}
                    itemSize={3}
                    array={positionArray}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                color={'#ffffff'}
                transparent
            />
        </points>
    )
}

export default Snowfall