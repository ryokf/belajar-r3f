import { useSpring, animated } from '@react-spring/three'
import React from 'react'

const ReactSpring = () => {
    const [clicked, setClicked] = React.useState(false)
    const { position, color } = useSpring({ 
            from: { position: [0,0,0], color: 'red' },
            to: [
                { position: [1,0,0], color: 'hotpink' },
                { position: [2,0,0], color: 'aquamarine' },
                { position: [0,0,0], color: 'red'}
            ],
            // loop: true 
            // delay:10000
            config:{
                mass: 1,
                friction: 10,
                tension: 200,
                // velocity: 0.1,
            }
            })

    // const [spring, api] = useSpring(()=> ({
    //     from: {scale : 1},
    // }),{
    //     loop: true
    // })

    // const handleClick = () => {
    //     api.start({to: {scale: spring.scale.get() === 1 ? 2 : 1}, loop: true})
    // }

    console.log(position)

    return (
        <group>
            <animated.mesh onClick={() => setClicked(!clicked)} position={position}>
                <boxGeometry args={[1, 1, 1]} />
                <animated.meshBasicMaterial color={color} />
            </animated.mesh>
        </group>
    )
}

export default ReactSpring