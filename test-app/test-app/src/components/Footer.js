import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
// import LibreFranklinTTF from '../fonts/LibreFranklin.ttf';

// const FontFace = createGlobalStyle`
//   @font-face {
//     font-family: 'Libre Franklin';
//     src: url(${LibreFranklinTTF}) format('truetype');
//     font-weight: normal;
//     font-style: normal;
//   }
// `;

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Our Vision</Link>
            <Link to='/'>Our Team</Link> 
            {/* Have to create these links first - our team would just give brief introductions of who 
            we are and what we do, our vision statement would be something like "creating easy to access
            and affordable housing system for college students... etc." */}
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Facebook</Link>
            {/* discuss during meeting what social media */}
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
        <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <span style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
             HooHousing
            <img
              src={`${process.env.PUBLIC_URL}/images/logoowl.png`}
              alt='Logo'
             style={{ height: '5rem', marginLeft: '0.5rem' }}/>
           </span>
            </Link>
          </div>
          <small class='website-rights'>HooHousing © 2024</small>
          {/* MAKE SURE TO UPDATE  */}

          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>

            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
    
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;