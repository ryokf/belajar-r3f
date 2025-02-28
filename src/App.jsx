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

function App() {

  return (
    <div className='h-screen flex justify-center items-center'>
      <Canvas
        shadows
        orthographic
        camera={{ zoom: 50, position: [0, 0, 5] }}
      >
        <Lighting></Lighting>
        <OrbitControls />
        <Perf></Perf>
      </Canvas>
    </div>
  )
}

export default App
