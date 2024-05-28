import React, { useState } from 'react';
import '../styling/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Original navbar items */}
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#">HOME</a></li>
        <li className="nav-item"><a href="#">IMAGE GENERATION</a></li>
        <li className="nav-item"><a href="#">IMAGE CLASSIFICATION</a></li>
        <li className="nav-item"><a href="#">REGISTER</a></li>
        <li className="nav-item"><a href="#">LOGIN</a></li>
      </ul>

      {/* Mobile navbar toggle button */}
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Mobile navbar items */}
      {isMobileMenuOpen && (
        <ul className="navbar-nav-mobile">
          <li className="nav-item"><a href="#">HOME</a></li>
          <li className="nav-item"><a href="#">IMAGE GENERATION</a></li>
          <li className="nav-item"><a href="#">IMAGE CLASSIFICATION</a></li>
          <li className="nav-item"><a href="#">REGISTER</a></li>
          <li className="nav-item"><a href="#">LOGIN</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
