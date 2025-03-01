import { CameraControls, Grid } from '@react-three/drei'
import { useControls, button } from 'leva'
import React from 'react'
import * as THREE from 'three'

const Controls = () => {
    const cameraRef = React.useRef()

    const { DEG2RAD } = THREE.MathUtils

    useControls("Horizontal Rotation",{
        "45 degree": button(() => {
            cameraRef.current.rotate(45 * DEG2RAD, 0, true)
        }),
        "-90 degree": button(() => {
            cameraRef.current.rotate(90 * DEG2RAD, 0, true)
        }),
        "180 degree": button(() => {
            cameraRef.current.rotate(180 * DEG2RAD, 0, true)
        }),
    })

    useControls("Vertical Rotation",{
        "45 degree": button(() => {
            cameraRef.current.rotate(0, 45 * DEG2RAD, true)
        }),
        "-90 degree": button(() => {
            cameraRef.current.rotate(0, -90 * DEG2RAD, true)
        }),
        "180 degree": button(() => {
            cameraRef.current.rotate(0, 180 * DEG2RAD, true)
        }),
    })

    return (
        <>
            <Grid 
                args={[
                    30, // size
                    30, // divisions
                ]}
                cellSize={0.25}
                fadeDistance={20}
            ></Grid>

            <CameraControls ref={cameraRef} smoothTime={1}></CameraControls>
            <ambientLight intensity={1} />
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}

export default Controls