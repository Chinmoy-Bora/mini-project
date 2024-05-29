import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import '../styling/Navbar.css';
import '../styling/HomeStyle.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Original navbar items */}
      <ul className="navbar-nav">
        {/* Use Link components instead of anchor tags */}
        <li className="nav-item"><Link to="/">HOME</Link></li>
        <li className="nav-item"><Link to="/image-generation">IMAGE GENERATION</Link></li>
        <li className="nav-item"><Link to="/image-classification">IMAGE CLASSIFICATION</Link></li>
        <li className="nav-item"><Link to="/register">REGISTER</Link></li>
        <li className="nav-item"><Link to="/login">LOGIN</Link></li>
      </ul>

      {/* Mobile navbar toggle button */}
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Mobile navbar items */}
      {isMobileMenuOpen && (
        <ul className="navbar-nav-mobile">
          {/* Use Link components instead of anchor tags */}
          <li className="nav-item"><Link to="/">HOME</Link></li>
          <li className="nav-item"><Link to="/image-generation">IMAGE GENERATION</Link></li>
          <li className="nav-item"><Link to="/image-classification">IMAGE CLASSIFICATION</Link></li>
          <li className="nav-item"><Link to="/register">REGISTER</Link></li>
          <li className="nav-item"><Link to="/login">LOGIN</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
