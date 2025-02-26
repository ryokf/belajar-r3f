import './App.css'
import { Canvas } from '@react-three/fiber'
import Basic from './Basic'
import Cube from './Cube'
import { OrbitControls } from '@react-three/drei'
import CustomGeometry from './CustomGeometry';
import Snowfall from './Snowfall';

function App() {

  return (
    <div className='h-screen flex justify-center items-center'>
      <Canvas
        camera={{ zoom: 50, position: [0, 0, 10], far: 100, near: 0.1 }}
        gl={{ antialias: true }}
        onCreated={(state)=>{
          // cara mengganti warna latar belakang
          state.gl.setClearColor('#123123')
        }}  
      >
        <Snowfall></Snowfall>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
