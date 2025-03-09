import React from 'react';
import homeImg from '../images/homepgimg.jpg'; // Image is in the same folder


const Home = () => {
  return (
    <section id="home" className='hpg'>

        <div className="home-text">
          <h1>Your Complete</h1>
          <h1 className='homeheading'>Writing Solution</h1>
        
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur deleniti non odit, architecto rem mollitia quos, blanditiis unde commodi sint deserunt, libero quisquam adipisci facere? Maiores amet nulla distinctio autem?
          </p>
          
        </div>
        <img src={homeImg} alt=""></img>

      </section>
  );
};

export default Home;


