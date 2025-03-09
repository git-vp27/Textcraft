// import React, { useEffect } from 'react';
import './style.css';
import './homeNavbarResp.css';
import './featuresResp.css';
import './aboutResp.css';
import './animation.css'; // Import your styles
import Navbar from './components/navbar';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/about';

// import Footer from './components/footer';

import Contact from './components/contact';
import Teams from './components/Teams';

import Login from './loginsignup/Login';
import Signup from './loginsignup/Signup';

import EmailGen from './pages/EmailGenerator';
import SgCheck from './pages/SpellGrammarCheck';
import TxtSummarization from './pages/TextSummarization';
import Paraphraser from './pages/Paraphraser';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App(){

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/email-generator" element={<EmailGen />} />
        <Route path="/features/spell-grammar-check" element={<SgCheck />} />
        <Route path="/features/text-summarization" element={<TxtSummarization/>} />
        <Route path="/features/paraphraser" element={<Paraphraser />} />
        <Route path="/team" element={<Teams/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
