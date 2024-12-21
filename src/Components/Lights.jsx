/* eslint-disable react/no-unknown-property */
const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} />
        </>
    );
};

export default Lights;