/* eslint-disable react/no-unknown-property */
const Sphere = () => {
    return (
        <mesh position={[2, 0, 0]}>
            <sphereGeometry args={[1, 1024, 1024]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    )
}

export default Sphere