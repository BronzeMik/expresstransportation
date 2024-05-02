import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Express Transportation</div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={isMenuOpen} onChange={toggleMenu} />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#schedule">Schedule a Ride</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
