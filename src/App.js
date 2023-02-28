import React, { useEffect, useState } from 'react';
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Skills from './routes/Skills';
import Nav from './Components/Nav';
import HeroImg from './Components/HeroImg';
import Footer from './Components/Footer';
import Github from './routes/Github';
import Loader from './Components/Loader';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setIsLoading(true);
      let timer = setTimeout(() => {
          setIsLoading(false);
          return () => clearInterval(timer);
      }, 2000);
  }, []);

  return isLoading?(
  <Loader/>
  ):(
    <div className='app'>
  <Nav/>
  <HeroImg/>
  <Home/>
  <About/>
  <Skills/>
  <Project/>
  <Github/>
  <Contact/>
  <Footer/>
  </div>
  );
}

export default App;
