// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Layout } from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <ThemeProvider>
      <Layout>
        <div className="app container-width">
          <Navbar />

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<h1>404 — Not Found</h1>} />
            </Routes>
          </main> 
          
          <Footer />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App
