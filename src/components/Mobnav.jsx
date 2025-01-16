import React, { useState } from 'react';
import '../mobnav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Logo from '../assets/AbstractDogsLogo.png';

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div className="MobileNavbar">
      <div className="NavbarContainer">
        {/* Logo Section */}
        <div className="Logo">
          <img
            src={Logo}
            alt="Logo img"
            className="nav-logo"
            style={{ width: '2.5rem', height: '2.5rem' }}
          />
        </div>

        {/* Menu Toggle Button */}
        <div className="MenuIcon" onClick={toggleMenu}>
          <FontAwesomeIcon
            className="times"
            icon={isMenuOpen ? faTimes : faBars}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="DropdownMenu">
          <ul>
            <li onClick={() => handleMenuItemClick('about')}>About</li>
            <li onClick={() => handleMenuItemClick('sneek')}>Collection</li>
            <li onClick={() => handleMenuItemClick('faq')}>FAQs</li>
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
              href="https://x.com/Abstract_Dog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            </a>
            <a
              href="https://discord.com/invite/fTv5bhkSfN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} className="discord-icon" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;

