import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import AcademicResources from './pages/AcademicResources';
import DesMoines from './pages/DesMoines';
import Events from './pages/Events';
import GenderedViolence from './pages/GenderedViolence';
import Healing from './pages/Healing';
import Home from './pages/Home';
import Literature from './pages/Literature';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gendered-violence" element={<GenderedViolence />} />
          <Route path="/healing" element={<Healing />} />
          <Route path="/about-the-project" element={<About />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/academic-resources" element={<AcademicResources />} />
          <Route path="/des-moines-organizations" element={<DesMoines />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;