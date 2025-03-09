// import React from 'react';
// import logo from '../images/lg.jpg'; // Image is in the same folder



// const Navbar = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <img src={logo} alt="TextCraft logo" />
//         <div>TextCraft</div>
//       </div>

//       <div className="nav-elements">
//         <a href="#home" className="home"><i className="fa-solid fa-house"></i> Home</a>
//         <a href="#feature" className="feature">Features</a>
//         <a href="#team" className="team">Team</a>
//         <a href="#about" className="about">About Us</a>
//         <a href="#contact" className="contact">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/lg3.jpg';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="TextCraft logo" />
        <div>TextCraft</div>
      </div>

      <div className="nav-elements">
        <Link to="/" className="home"><i className="fa-solid fa-house"></i> Home</Link>
        <Link to="/about" className="about">About Us</Link>
        <Link to="/features" className="feature">Features</Link>
        <Link to="/team" className="team">Team</Link>
        <Link to="/contact" className="contact">Contact</Link>
        <Link to="/Signup" className="user"><i class="fa-regular fa-circle-user"></i></Link>
      </div>

      <div className='nav-menu'><i class="fa-solid fa-bars"></i></div>
      <div className="hamMenu-box" id="hamMenu-box">
        <ul>
          <li className="ham-box-items"><Link to="/">Home <i className="fa-solid fa-house"></i></Link></li>
          <li className="ham-box-items"><Link to="/features">Features</Link></li>
          <li className="ham-box-items"><Link to="/team">Team</Link></li>
          <li className="ham-box-items"><Link to="/about">About Us</Link></li>
          <li className="ham-box-items"><Link to="/contact">Contact</Link></li>
          <li className="ham-box-items"><Link to="/Signup">Sign Up</Link></li>
          <li className="ham-box-items"><Link to="/Login" >Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
