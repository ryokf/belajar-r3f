import { Canvas } from '@react-three/fiber'

const Basic = () => {
    return (
        <>
            {/* 
        The <Canvas> component from @react-three/fiber is a wrapper that allows you to render 3D content using Three.js in a React application. 
        It handles the creation and management of the WebGL context and allows you to define your 3D scene using JSX.
        Canvas component include a camera, renderer, and scene.
        */}
            <Canvas>
                {/* 
            The <mesh> component is a wrapper around the Three.js Mesh object. 
            It allows you to define a 3D object using JSX and render it in your scene.
            The mesh component takes two props: geometry and material.
            The geometry prop defines the shape of the object, and the material prop defines the appearance of the object.
        */}
                <mesh position={[2, 2, 0]}>
                    <torusKnotGeometry />
                    <meshNormalMaterial />
                </mesh>
                <mesh position={[-2, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <torusKnotGeometry />
                    <meshNormalMaterial />
                </mesh>
                {/* 
            The <group> component is a wrapper around the Three.js Group object. 
            It allows you to group multiple 3D objects together and treat them as a single entity.
            The group component takes a single prop: children.
            The children prop is an array of JSX elements that define the 3D objects that should be grouped together.
        */}
                <group position={[0, -2, 0]}>
                    <mesh position={[2, 0, 0]} >
                        <torusKnotGeometry />
                        <meshNormalMaterial />
                    </mesh>
                    <mesh position={[-2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                        <torusKnotGeometry />
                        <meshNormalMaterial />
                    </mesh>
                </group>
            </Canvas></>
    )
}

export default Basic