import React, { useState } from 'react';
import '../header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Logo from '../assets/AbstractDogsLogo.png';

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="MobileNavbar"
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <div
        className="NavbarContainer"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        {/* Logo Section */}
        <div className="Logo">
          <img
            src={Logo}
            alt="Logo img"
            style={{ width: '3.5rem', height: '3.5rem', cursor: 'pointer' }}
          />
        </div>

        {/* Menu Toggle Button */} {/*check back here for toggle menu styling*/}
        <div
          className="MenuIcon"
          onClick={toggleMenu}
          style={{
            fontSize: '1.8rem',
            cursor: 'pointer',
            color: "#F5F7F5"
          }}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="DropdownMenu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#ADA493',
            padding: '1rem 0',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              textAlign: 'center',
              width: '100%',
            }}
          >
            <li
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '0.8rem 0',
                fontSize: '1.2rem',
                cursor: 'pointer',
                background: '#ADA493',
                borderBottom: '1px solid #F5F7F5',
              }}
            >
              About
            </li>
            <li
              onClick={() => document.getElementById('sneek').scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '0.8rem 0',
                fontSize: '1.2rem',
                cursor: 'pointer',
                background: '#ADA493',
                borderBottom: '1px solid #F5F7F5',
              }}
            >
              Collection
            </li>
            <li
              onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '0.8rem 0',
                fontSize: '1.2rem',
                cursor: 'pointer',
                background: '#ADA493',
                borderBottom: '1px solid #F5F7F5',
              }}
            >
              FAQs
            </li>
          </ul>

          {/* Socials */}
          <div
            className="SocialIcons"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              background: '#ADA493',
              marginTop: '1rem',
            }}
          >
            <a
              href="https://x.com/Abstract_Dog" // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: '#1DA1F2', fontSize: '1.5rem', background: '#ADA493', }}
              />
            </a>
            <a
              href="https://discord.com/invite/fTv5bhkSfN" // Replace with your Discord invite URL
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <FontAwesomeIcon
                icon={faDiscord}
                style={{ color: '#7289DA', fontSize: '1.5rem', background: '#ADA493', }}
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;
