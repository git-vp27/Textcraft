import React from 'react';
import './pagescss/pages.css';
import { Link } from 'react-router-dom';
import emailImg from '../images/email.jpeg';
import paraimg from '../images/para.png';
import sgimg from '../images/sg.png';
import tsimg from '../images/txtsumm.png';

function Paraphraser() {
  return (
    <div className='main'>

      <div className='sidebar'>
        <Link to="/features/email-generator" title="Email Generation">
          <img src={emailImg} alt="" />
        </Link>
        <br />
        <Link to="/features/spell-grammar-check" title="Spell & Grammar Check">
          <img src={sgimg} alt="" />
          {/* Spell & Grammar<br />Check */}
        </Link>
        <br />
        <Link to="/features/text-summarization" title="Text Summarization">
          <img src={tsimg} alt="" />
          {/* Text<br />Summarization */}
        </Link>
        <br />
        <Link to="/features/paraphraser" title="Paraphraser">
          <img src={paraimg} alt="" />
          {/* Paraphraser */}
        </Link>
      </div>

      <div className='paraphraser'>
        <h2>Paraphraser</h2>
      </div>

    </div>
  )
}

export default Paraphraser;
