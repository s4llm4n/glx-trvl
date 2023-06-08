import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Love. Code.</h1>
        <p>Love to code, make something great.</p>
        <div>
          <Link to="/training" className="btn">
            Profile
          </Link>
          <Link to="/contact" className="btn btn-light">
            Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default video