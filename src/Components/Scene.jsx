/* eslint-disable no-unused-vars */
import { Canvas } from "@react-three/fiber"
import Lights from "./Lights"
import Cube from "./Models/Cube"
import Sphere from "./Models/Sphere"
import { Environment, OrbitControls, SoftShadows} from "@react-three/drei"
import Plane from "./Models/Plane"


const Scene = () => {
    return (
        <Canvas shadows className="bg-black" camera={{ position: [0, 3, 5] }}>
            <SoftShadows Size={40} samples={16}></SoftShadows>
            <Environment preset="sunset" background={true} ></Environment>
            <Lights />
            {/* <Sphere /> */}
            <Plane />
            <Cube />
            <OrbitControls />
        </Canvas>
    )
}

export default Scene