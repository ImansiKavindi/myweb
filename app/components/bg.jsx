import Starfield from 'react-starfield';

function Starfiled() {
  return (
    <div className="App">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
    
    </div>
  );
}

export default Starfiled;