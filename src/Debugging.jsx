import { button,useControls } from 'leva'

const Debugging = () => {
    const {position, color, wireframe, scale} = useControls({
        position: {
            value: {
                x: 0,
                y: 0,
                z: 0
            },
            min: -10,
            max: 10,
            step: 0.1
        },
        color: '#ff0000',
        wireframe: false,
        click: button(() => console.log('click')),
        scale: {options:[1,2,3]}
    })

    console.log(position.x)

    return (
        <group>
            <ambientLight intensity={2} />
            <mesh scale={scale} position={[position.x, position.y, position.z]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={color} wireframe={wireframe} />
            </mesh>
        </group>
    )
}

export default Debugging