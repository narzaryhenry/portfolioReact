import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./Navlinks";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <nav id="desktop-nav">
        <Logo />
        <div>
          <ul className="nav-links">
            {navItems.map((item) => (
              <NavLinks key={item.href} label={item.label} href={item.href} />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
