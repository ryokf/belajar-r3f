import { Canvas } from "@react-three/fiber"
import Lights from "./Lights"
import Cube from "./Models/Cube"
import Sphere from "./Models/Sphere"
import { Environment, OrbitControls} from "@react-three/drei"


const Scene = () => {
    return (
        <Canvas className="bg-black" camera={{ position: [0, 3, 5] }}>
            <Environment preset="sunset" background={true} ></Environment>
            <Lights />
            <Sphere />
            <Cube />
            <OrbitControls />
        </Canvas>
    )
}

export default Scene