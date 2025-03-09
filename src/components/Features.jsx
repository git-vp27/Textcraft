import React from 'react';
import emailImage from '../images/email.jpeg'; // Updated paths to images in images folder
import sgImage from '../images/sg.png';
import txtSummImage from '../images/txtsumm.png';
import paraImage from '../images/para.png';



import { Link } from 'react-router-dom';


const Features = () => {
  return (
      <section id="feature" className="fpg">
      <div className="feat">
        <div className="email" id='email'>
          <div>
            <img src={emailImage} alt="Email Generation" />
          </div>
          <Link to="/features/email-generator">Email<br />Generation</Link>
        </div>
        <div className="sg">
          <div>
            <img src={sgImage} alt="Spell & Grammar Check" />
          </div>
          <Link to="/features/spell-grammar-check">Spell & Grammar<br />Check</Link>
        </div>
        <div className="ts">
          <div>
            <img src={txtSummImage} alt="Text Summarization" />
          </div>
          <Link to="/features/text-summarization">Text<br />Summarization</Link>
        </div>
        <div className="para">
          <div>
            <img src={paraImage} alt="Paraphraser" />
          </div>
          <Link to="/features/paraphraser">Paraphraser</Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
