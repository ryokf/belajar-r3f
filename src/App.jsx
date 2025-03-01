import './App.css'
import { Canvas } from '@react-three/fiber'
import Basic from './Basic'
import Cube from './Cube'
import { OrbitControls } from '@react-three/drei'
import CustomGeometry from './CustomGeometry';
import Snowfall from './Snowfall';
import Model from './Model'
import { Suspense } from 'react'
import { Perf } from 'r3f-perf'
import Lighting from './Lighting';
import Debugging from './Debugging';

function App() {

  return (
    <div className='h-screen flex justify-center items-center'>
      <Canvas>
        <Debugging></Debugging>
        <OrbitControls />
        {/* <Perf></Perf> */}
      </Canvas>
    </div>
  )
}

export default App
