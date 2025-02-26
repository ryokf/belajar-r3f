import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

const Model = () => {
    const model = useGLTF('./model/dog.glb')
    const animations = useAnimations(model.animations, model.scene)

    useEffect(() => {
        animations.actions.Writing.play()
    }, [])

    console.log(animations)

    return (
        <group>
            <ambientLight intensity={5} />
            <primitive object={model.scene} scale={0.3} position={[0, -0.4, 0]} />
        </group>
    )
}

useGLTF.preload('./model/dog.glb')

export default Model