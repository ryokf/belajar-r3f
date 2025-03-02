import { Scroll, ScrollControls } from '@react-three/drei';
import React from 'react'
import ImagesScroll from './ImagesScroll';

const ScrollControl = () => {
    return (
        <ScrollControls pages={3}>
            <ambientLight intensity={2} />
            <Scroll>
                <mesh position={[1.5, -1, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                </mesh>
                <ImagesScroll></ImagesScroll>
            </Scroll>

            <Scroll html>
                {/* DOM contents will scroll along */}
                <h1 className='text-5xl' style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>to</h1>
                <h1 className='text-5xl' style={{ position: 'absolute', top: '120vh', left: '60vw' }}>be</h1>
                <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw' }}>Home</h1>
            </Scroll>
        </ScrollControls>
    );
};


export default ScrollControl