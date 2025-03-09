// import React from 'react';
// import './pages.css';
// import { Link } from 'react-router-dom';
// import emailImg from '../images/email.jpeg';
// import paraimg from '../images/para.png';
// import sgimg from '../images/sg.png';
// import tsimg from '../images/txtsumm.png';


// function SpellGrammarCheck() {
//   return (

//     <div className='main'>

//       <div className='sidebar'>
//         <Link to="/features/email-generator" title="Email Generation">
//           <img src={emailImg} alt="" />
//         </Link>
//         <br />
//         <Link to="/features/spell-grammar-check" title="Spell & Grammar Check">
//           <img src={sgimg} alt="" />
//           {/* Spell & Grammar<br />Check */}
//         </Link>
//         <br />
//         <Link to="/features/text-summarization" title="Text Summarization">
//           <img src={tsimg} alt="" />
//           {/* Text<br />Summarization */}
//         </Link>
//         <br />
//         <Link to="/features/paraphraser" title="Paraphraser">
//           <img src={paraimg} alt="" />
//           {/* Paraphraser */}
//         </Link>
//       </div>

//       <div className='txtsummarization'>
//         <h2>Spell & Grammar Check</h2>
//       </div>

//     </div>
//   )
// }

// export default SpellGrammarCheck;


import React, { useState } from 'react';

import './pagescss/sgcheck.css';
import './pagescss/pages.css';

import { Link } from 'react-router-dom';
import emailImg from '../images/email.jpeg';
import paraimg from '../images/para.png';
import sgimg from '../images/sg.png';
import tsimg from '../images/txtsumm.png';

const SpellGrammarCheck = () => {
    const [inputText, setInputText] = useState('');
    const [correctedText, setCorrectedText] = useState('');
    const [corrections, setCorrections] = useState([]);

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSpellCheck = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/spellcheck/correct-text', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText }),
            });
            const data = await response.json();

            if (response.ok) {
                setCorrectedText(data.corrected_text);
                setCorrections(data.grammar_corrections);
            } else {
                console.error("Error:", data);
                setCorrections([]); // Clear corrections on error
            }
        } catch (error) {
            console.error("Error fetching spell check:", error);
            setCorrections([]); // Clear corrections on error
        }
    };

    return (
        <div id='main-box-sgcheck' className='main'>

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

          <div className='sgcheckbox-ip'>
            <h2>Spell Check</h2>
            <textarea
              value={inputText}
              onChange={handleTextChange}
              resize='none'
              // rows="10"
              // cols="50"
              placeholder="Enter your text here..."
            />
            <button onClick={handleSpellCheck}>Check Text</button>
          </div>

          <div className='sgcheckbox-op'>
            <h2>Corrected Text:</h2>
            <p>{correctedText}</p>

            <h3>Corrections:</h3>
            <ul>
              {Array.isArray(corrections) && corrections.length > 0 ? (
                  corrections.map((correction, index) => (
                    <li key={index}>
                      <strong>Error:</strong> {correction.error}
                      <br />
                      <strong>Suggestions:</strong> {correction.suggestions.join(', ')}
                      <br />
                      <strong>Message:</strong> {correction.message}
                    </li>
                  ))
                ) : (
                <li>No corrections found.</li>
              )}
            </ul>
          </div>
        </div>
    );
};

export default SpellGrammarCheck;