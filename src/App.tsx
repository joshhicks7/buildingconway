import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ThroughTheYears from './pages/ThroughTheYears';
import Contact from './pages/Contact';
import RentalResidential from './pages/RentalResidential';
import RentalCommercial from './pages/RentalCommercial';
import RentalRemodeled from './pages/RentalRemodeled';
import ProjectsResidential from './pages/ProjectsResidential';
import ProjectsCommercial from './pages/ProjectsCommercial';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/through-the-years" element={<ThroughTheYears />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rental/residential" element={<RentalResidential />} />
            <Route path="/rental/commercial" element={<RentalCommercial />} />
            <Route path="/rental/remodeled" element={<RentalRemodeled />} />
            <Route path="/projects/residential" element={<ProjectsResidential />} />
            <Route path="/projects/commercial" element={<ProjectsCommercial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
