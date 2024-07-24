import React from 'react'
import nodejsLogo from '../nodejs-logo.svg';
import './Hero.css';

function Hero() {
  window.addEventListener('scroll', () => {
    var hero = document.querySelector('.hero');

    var windowheight = window.innerHeight;
    var herobottom = hero.getBoundingClientRect().bottom;

    if (herobottom > windowheight / 2) {
      hero.classList.remove('opacity-35pct');
    }
    else {
      hero.classList.add('opacity-35pct');
    }
  });

  ['load', 'resize'].forEach((event) => {
    window.addEventListener(event, () => {
      var HW = document.querySelector('.hero-wrapper');
      var HT = document.querySelector('.hero-title');
      var HI = document.querySelector('.hero-image');

      if (window.innerWidth <= 1000) {
        HW.classList.add('vert-hero-wrapper');
        HT.classList.add('vert-hero-title');
        HI.classList.add('vert-hero-image');
      }
      else {
        HW.classList.remove('vert-hero-wrapper');
        HT.classList.remove('vert-hero-title');
        HI.classList.remove('vert-hero-image');
      }
    });
  });

  return (
    <div className="hero opacity">
      <div className="hero-wrapper">
        <h1 className="hero-title">Node.js & React Test Project</h1>
        <img alt="" className="hero-image" src={nodejsLogo} />
      </div>
    </div>
  )
}

export default Hero