import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';


const particleOptions = {
  "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
};

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particleOptions}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
{/* {      <FaceRecognition />} */}
    </div>
  );
}

export default App;
