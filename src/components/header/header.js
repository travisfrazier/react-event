import React from 'react'
import './_header.scss'

export const Header = () => (
  <header>
    <div className="container header-container">
      <p className="header-top-text">Far-Flung Tin Can presents</p>
      <h1>
        <img className="invent" src={require('../../images/main-logo.png')} />
      </h1>
      <p className="header-sub-title">
        Make 2019 a Year of Impact by Finding Your Fit in the World of Missions
      </p>
      <a
        href="https://www.eventbrite.com/o/far-flung-tin-can-10929829971"
        target="_blank"
      >
        <button className="main-button">REGISTER</button>
      </a>
      <p className="header-date">
        Fri, Sep 20th - Sat, Sep 21st, 2019 | Chattanooga, TN
      </p>
      <p className="header-text">Special guests from</p>
      <div className="header-logos">
        <img
          className="google-logo"
          src={require('../../images/far-flung-logo.png')}
        />
        {/* <img
          className="katana-logo"
          src={require('../../images/planet-logo.png')}
        /> */}
      </div>
    </div>
  </header>
)
