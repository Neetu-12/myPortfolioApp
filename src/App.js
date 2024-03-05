import React from 'react';
import './index.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OtherPage from './routes/OtherPage';
import ImagesSlider from './components/ImagesSlider';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/ImagesSlider" Component={ImagesSlider} />
        <Route path="/" Component={Home} />
        <Route path="/Project" Component={Project} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/About" Component={About} />
        <Route path="*" Component={OtherPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
