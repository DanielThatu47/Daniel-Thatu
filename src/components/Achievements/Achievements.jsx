import React from 'react';
import './Achievements.css'; // Import the CSS file
import Achieve from './prize.jpeg'

const Achievements = () => (
  <>

<h1 className="heading1"> Achievements</h1>

  <div id="achievements" className="achievements-section">
    <div className="achievements-container">
      <div className="achievements-heading">
        <h1>SFIT COLLOQUIUM 2024 Achievement</h1>
      </div>
      <div className="achievements-image">
        <img src={Achieve} alt="Achievement" />
      </div>
      <div className="achievements-text">
        <p>Smart Campus Tournament : <strong className='first'>First prize</strong> &nbsp; for the hardware project - A system which detects cracks and fills them automatically</p>
      </div>
    </div>
  </div>
  </>
);

export default Achievements;
