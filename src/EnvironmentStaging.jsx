import { Environment } from '@react-three/drei'
import React from 'react'

const EnvironmentStaging = () => {
  return (
    <>
      <Environment
        background 
        files={'./environment/garden.hdr'}
        ground={{
          height: 6,
          radius: 60,
          scale: 100
        }}
      />

      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='blue' />
      </mesh>

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color='lime' />
      </mesh>
    </>
  )
}

export default EnvironmentStaging