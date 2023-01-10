import React from 'react';
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Resume from "./routes/Resume";
import Skills from './routes/Skills';
import Nav from './Components/Nav';
import HeroImg from './Components/HeroImg';
import Footer from './Components/Footer';
import Github from './routes/Github';

function App() {
  return (
  <>
  <Nav/>
  <HeroImg/>
  <Home/>
  <About/>
  <Skills/>
  <Project/>
  <Github/>
  <Contact/>
  <Resume/>
  {/* <Footer/> */}
  </>
  );
}

export default App;
