import './App.css';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Navbar/Navbar';

import About from "./Components/Pages/About/About"
import Jobs from "./Components/Pages/Jobs/Jobs"
import Projects from "./Components/Pages/Project/Projects"
import Contact from './Components/Pages/Contact/Contact'
import Experience from './Components/Pages/Experience/Experience'
import Footer from './Components/Pages/Footer/Footer';


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Experience" element={<Experience />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
