import './App.css';
import DappSection from './components/Explore';
import AboutEthAi from './components/About';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Question from './components/frequently';
import Roadmaps from './components/Roadmap';
import Container from './components/Container';
import Tokenomics from './components/Tokenomics';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
     <Navbar/>
    <div>
      <Container/>
      <AboutEthAi/>
      <Tokenomics/>
      <Roadmaps/>
      <Question/>
      <DappSection/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
