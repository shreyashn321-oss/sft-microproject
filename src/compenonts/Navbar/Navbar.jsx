import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Team",
      href: "#team",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Brand */}

        <a
          href="#home"
          className="navbar-name"
          onClick={() => setMenuOpen(false)}
        >
          NEXORA
        </a>

        {/* Navigation */}

        <div
          className={`navbar-links ${
            menuOpen ? "active" : ""
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;