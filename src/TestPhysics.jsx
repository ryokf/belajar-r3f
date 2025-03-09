import { KeyboardControls, useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Physics, quat, RigidBody } from '@react-three/rapier'
import React from 'react'
import * as THREE from 'three'

const TestPhysics = () => {
    const spinnerRef = React.useRef()
    const cubeRef = React.useRef()
    const allKeys = useKeyboardControls((keys) => keys)

    const cubeMovement = () => {
        if(allKeys.forward) {
            cubeRef.current.applyImpulse({ x: 0, y: 0, z: -0.1 })
        }else if(allKeys.backward) {
            cubeRef.current.applyImpulse({ x: 0, y: 0, z: 0.1 })
        }else if(allKeys.left) {
            cubeRef.current.applyImpulse({ x: -0.1, y: 0, z: 0 })
        }else if(allKeys.right) {
            cubeRef.current.applyImpulse({ x: 0.1, y: 0, z: 0 })
        }else if(allKeys.up) {
            cubeRef.current.applyImpulse({ x: 0, y: 1, z: 0 })
        }   
    }

    useFrame((state) => {
        const newRotation = quat().setFromEuler(new THREE.Euler(0, state.clock.elapsedTime * 2, 0));
        spinnerRef.current.setRotation(newRotation);
        spinnerRef.current.setTranslation({ x: 2 * Math.sin(state.clock.elapsedTime), y: Math.abs(Math.sin(state.clock.elapsedTime)), z: 2 * Math.cos(state.clock.elapsedTime) });
        cubeMovement()
    })


    return (
        <Physics>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={2} />

            <RigidBody ref={cubeRef} type='dynamic'>
                <mesh position={[2, 1, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color='hotpink' />
                </mesh>
            </RigidBody>

            <RigidBody position={[0, 0.5, 0]} ref={spinnerRef} type='kinematicPosition'>
                <mesh >
                    <boxGeometry args={[1, 0.1, 8]} />
                    <meshStandardMaterial color='blue' />
                </mesh>
            </RigidBody>

            <RigidBody type='fixed'>
                <mesh>
                    <boxGeometry args={[8, 0.1, 8]} />
                    <meshStandardMaterial color='aqua' />
                </mesh>
            </RigidBody>
        </Physics>

    )
}

export default TestPhysics