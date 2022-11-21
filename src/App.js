import './assets/css/App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Progress from './components/Progress';
import OurTeam from './components/OurTeam';
import Programs from './components/Programs';
import Mission from './components/Mission';
import HODMessage from './components/HODMessage';
import Partners from './components/Partners';

function App() {
  return (
    <>
      <Header link="https://forms.gle/Nv4MvLyhk8sogRKz6" />
      <About link="https://forms.gle/Nv4MvLyhk8sogRKz6" />
      <Progress />
      <Mission />
      <Programs />
      <OurTeam />
      <Partners />
      <HODMessage />
      <Footer /> 
    </>
  );
}

export default App;
