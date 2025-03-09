import { Physics, RigidBody } from '@react-three/rapier'
import React, { useRef } from 'react'

const PhysicsScene = () => {
    const torusKnotRef = useRef()

    const clickHandler = () => {
        torusKnotRef.current.applyImpulse({ x: -10, y: 10, z: 0 })
    }

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 5, 10]} intensity={2} />
            <Physics debug>
                    <RigidBody>
                        <mesh position={[0, 1, 0]}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color='blue' />
                        </mesh>
                    </RigidBody>

                    <RigidBody 
                        ref={torusKnotRef} 
                        colliders="hull" 
                        position={[2, 2, 0]}
                        onCollisionEnter={() => console.log('Collision Enter')}
                        restitution={1}
                        friction={0.5}
                    >
                        <mesh onClick={() => clickHandler()}>
                            <torusKnotGeometry args={[0.5, 0.4, 100, 16]} />
                            <meshStandardMaterial color='navy' />
                        </mesh>
                    </RigidBody>

                    <RigidBody colliders="trimesh" position={[-2, 2, 0]}>
                        <mesh>
                            <torusKnotGeometry args={[0.5, 0.4, 100, 16]} />
                            <meshStandardMaterial color='navy' />
                        </mesh>
                    </RigidBody>

                    <RigidBody type='fixed'>
                        <mesh>
                            <boxGeometry args={[50, 0.1, 50]} />
                            <meshStandardMaterial color='hotpink' />
                        </mesh>
                    </RigidBody>
            </Physics>
        </>
    )
}

export default PhysicsScene