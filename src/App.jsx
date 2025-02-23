import './App.css'
import { Canvas } from '@react-three/fiber'
import Basic from './Basic'
import Cube from './Cube'

function App() {

  return (
    <div className='h-screen flex justify-center items-center'>
      <Canvas>
        <Cube></Cube>
      </Canvas>
    </div>
  )
}

export default App
