import React, {useState } from 'react';
import './pagescss/emailgen.css';
import { Link } from 'react-router-dom';
import emailImg from '../images/email.jpeg';
import paraimg from '../images/para.png';
import sgimg from '../images/sg.png';
import tsimg from '../images/txtsumm.png';


const EmailGenerator = () => {
  // State variables to hold form input and generated email
  const [emailLength, setEmailLength] = useState('');
  const [tone, setTone] = useState('');
  const [purpose, setPurpose] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [importantKeywords, setImportantKeywords] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [feedback, setFeedback] = useState(''); // State for user feedback

  // Function to handle form submission for generating the first email
  const generateEmail = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Data to send to the backend
    const data = {
      emailLength: emailLength,
      tone: tone,
      purpose: purpose,
      recipientName: recipientName,
      senderName: senderName,
      importantKeywords: importantKeywords.split(',').map((keyword) => keyword.trim()), // Convert comma-separated string to array
    };

    try {
      const response = await fetch('https://f8e0-34-124-214-179.ngrok-free.app/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setGeneratedEmail(result.email);  // Set the generated email in state to display it
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to regenerate email based on user feedback
  const regenerateEmail = async () => {
    const data = { feedback: feedback }; // Data to send to the backend (user's feedback)

    try {
      const response = await fetch('https://f8e0-34-124-214-179.ngrok-free.app/regenerate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setGeneratedEmail(result.email);  // Set the regenerated email in state to display it
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className='main' id='email-main-box'>

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

      <div className='email-form'>

      <h1>Email Generator</h1>

      {/* Email Generation Form */}
      <form onSubmit={generateEmail}>
        <div className='email-length'>

          {/* <label>Email Length:</label> */}

          <select value={emailLength} onChange={(e) => setEmailLength(e.target.value)} required>
            <option value="">Email Length</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>

        </div>

        <div className='tone'>
          {/* <label>Tone:</label> */}

          <select value={tone} onChange={(e) => setTone(e.target.value)} required>
            <option value="">Tone of Email</option>
            <option value="formal">Formal</option>
            <option value="informal">Informal</option>
            <option value="friendly">Friendly</option>
          </select>
        </div>

        <div className='purpose'>

          {/* <label>Purpose:</label> */}
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Purpose: business proposal"
            required
          />
        </div>

        <div className='recipient'>
          {/* <label>Recipient Name:</label> */}

          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="Recipient Name: John Doe"
            required
          />
        </div>

        <div className='sender'>

          {/* <label>Sender Name:</label> */}

          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Sender Name: Jane Smith"
            required
          />
        </div>

        <div className='impkeywords'>

          {/* <label>Important Keywords (comma-separated):</label> */}
          <input
            type="text"
            value={importantKeywords}
            onChange={(e) => setImportantKeywords(e.target.value)}
            placeholder="Partnership, Investment, Meeting . . ."
            required
          />
          
        </div>
        <button type="submit" className='gen-btn'>Generate</button>
      </form>

      </div>

      <div className='gen-email'>

        {/* Display Generated Email */}
        {generatedEmail && (
          <div className='email-op'>
            <h2>Generated Email:</h2>
            <p>{generatedEmail}</p>

            {/* Conditionally render textarea and button for regeneration after first email is generated */}
            <div>
              <textarea
                placeholder="Enter your feedback to regenerate the email..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button onClick={regenerateEmail}>Regenerate Email</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default EmailGenerator;