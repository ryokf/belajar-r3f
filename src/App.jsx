/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import Box from './Box'
import { OrbitControls, Stats } from '@react-three/drei'

function App() {

  return (
    <div id="canvas-container" className='w-screen h-screen bg-black'>
      <Canvas >
        <Stats></Stats>
        <OrbitControls />
        <ambientLight intensity={1} />
        <Box></Box>
      </Canvas>
    </div>
  )
}

export default App
