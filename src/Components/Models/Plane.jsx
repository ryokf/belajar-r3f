/* eslint-disable react/no-unknown-property */

const Plane = () => {
    return (
        <mesh>
            <mesh 
                rotation={[-Math.PI / 2, 0, 0]} 
                position={[0, -1, 0]}
                receiveShadow
            >
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color='white' />
            </mesh>
        </mesh>
    )
}

export default Plane