import { CameraControls, MeshPortalMaterial, RoundedBox, Text, useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const PortalMaterial = () => {
    const model = useGLTF('./model/1.glb')
    const texture = useTexture('./texture/1.png')
    const [active, setActive] = useState(false)
    const portalRef = useRef()
    const cameraRef = useRef()

    useFrame((state, delta) => {
        easing.damp(portalRef.current, "blend", active ? 1 : 0, 0.2, delta)
    })

    useEffect(() => {
        if (active) {
            cameraRef.current.setLookAt(0, 0, 3, 0, 0, 0, true)
        } else {
            cameraRef.current.setLookAt(0, 0, 5, 0, 0, 0, true)
        }
    })

    const doubleClickHandler = () => {
        setActive(!active)
    }

    return (
        <>  
            <ambientLight intensity={4} />
            <CameraControls ref={cameraRef}></CameraControls>
            <Text position={[0, 1.6, 0.1]} fontSize={0.65}>
                Eggs
                <meshBasicMaterial toneMapped={false} />
            </Text>

            <RoundedBox onDoubleClick={doubleClickHandler} args={[3, 4, 0.1]} radius={0.1}>
                <MeshPortalMaterial ref={portalRef}>
                    <primitive object={model.scene} position={[0, 0.6, 0]} scale={0.6} />
                    <mesh scale={3}>
                        <sphereGeometry args={[1, 64, 64]} />
                        <meshBasicMaterial map={texture} side={THREE.BackSide} />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>

        </>
    )
}

export default PortalMaterial