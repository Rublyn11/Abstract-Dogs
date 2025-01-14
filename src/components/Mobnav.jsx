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

        {/* Menu Toggle Button */}
        <div
          className="MenuIcon"
          onClick={toggleMenu}
          style={{
            fontSize: '1.8rem',
            cursor: 'pointer',
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
            backgroundColor: '#f8f8f8',
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
              style={{
                padding: '0.8rem 0',
                fontSize: '1.2rem',
                cursor: 'pointer',
                borderBottom: '1px solid #ddd',
              }}
            >
              About
            </li>
            <li
              style={{
                padding: '0.8rem 0',
                fontSize: '1.2rem',
                cursor: 'pointer',
                borderBottom: '1px solid #ddd',
              }}
            >
              Collection
            </li>
            <li
              style={{
                padding: '0.8rem 0',
                fontSize: '1.2rem',
                cursor: 'pointer',
                borderBottom: '1px solid #ddd',
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
                style={{ color: '#1DA1F2', fontSize: '1.5rem' }}
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
                style={{ color: '#7289DA', fontSize: '1.5rem' }}
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;
