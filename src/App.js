import "./assets/css/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Progress from "./components/Progress";
import OurTeam from "./components/OurTeam";
import Programs from "./components/Programs";
import Mission from "./components/Mission";
import HODMessage from "./components/HODMessage";
import Partners from "./components/Partners";
import Wordpress_Workshop from "./components/Wordpress_Workshop";


function App() {
  return (
    <>
      <Header link="https://forms.gle/Nv4MvLyhk8sogRKz6" />
      <About
        link="https://forms.gle/Nv4MvLyhk8sogRKz6"
        about_title_1="What legacy will you leave behind?"
        about_title_2="Questions are never indiscreet, Have you asked yourself  on pursuing the ICT field?"
        about_description="Well if you haven’t already we here at coreQ are present for your answers. We all leave footprints in the sand, the question is, will we be a big heal, or a great soul. Are you satisfied with what you are doing in the field of ICT if not and want yourself to explore more we will be there for you to give you a rollercoaster ride on the technological advancement and exploration. 

To leave the world a little better than you found it join us. "
      />
      <Progress projects="4" programs="1" members="39" />
      <Mission />
      <Programs />
      <OurTeam />
      <Partners />
      {/* <HODMessage /> */}
      <Footer />
    </>
  );
}

export default App;
