/* eslint-disable react/no-unknown-property */
const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[3, 4, 5]} />
        </>
    );
};

export default Lights;