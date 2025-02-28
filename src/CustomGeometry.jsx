const CustomGeometry = () => {
    const arrayPosition = new Float32Array(
        [0,0,0,0,1,0,1,0,0]
    )

    return (
        <mesh>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={3}
                    itemSize={3}
                    array={arrayPosition}
                />
            </bufferGeometry>
            <meshNormalMaterial />
        </mesh>
    )
}

export default CustomGeometry