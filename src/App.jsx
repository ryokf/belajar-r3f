import './App.css'
import { Canvas } from '@react-three/fiber'
import Basic from './Basic'
import Cube from './Cube'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <div className='h-screen flex justify-center items-center'>
      {/* 
      The camera prop in the Canvas component is used to define the camera that should be used to render the scene.
      The camera prop takes a single object with several properties that define the camera:
      - position: the position of the camera in 3D space
      - zoom: the zoom level of the camera
      - far: the farthest distance that the camera can see
      - near: the closest distance that the camera can see
      - orthographic: whether the camera should use an orthographic (2D) or perspective (3D) projection
      */}
      <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 10], far: 100, near: 0.1 }}>
        <OrbitControls/>
        <Cube></Cube>
      </Canvas>
    </div>
  )
}

export default App
