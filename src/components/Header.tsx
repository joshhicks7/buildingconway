import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

interface DropdownItem {
  path: string;
  label: string;
}

interface NavItem {
  path: string;
  label: string;
  dropdown?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (items: DropdownItem[] | undefined) => {
    if (!items) return false;
    return items.some(item => location.pathname === item.path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const navItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    {
      path: '#',
      label: 'Rental Properties',
      dropdown: [
        { path: '/rental/residential', label: 'Residential Properties' },
        { path: '/rental/commercial', label: 'Commercial Properties' },
        { path: '/rental/remodeled', label: 'Remodeled Properties' },
      ]
    },
    {
      path: '#',
      label: 'Projects',
      dropdown: [
        { path: '/projects/residential', label: 'Residential Properties' },
        { path: '/projects/commercial', label: 'Commercial Properties' },
      ]
    },
    { path: '/through-the-years', label: 'Through The Years' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img 
            src="/images/KJCI-Logo-5-300x107.png" 
            alt="Keller Johnson Construction" 
            className="logo"
          />
        </Link>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <div key={item.label} className="nav-item-wrapper">
              {item.dropdown ? (
                <>
                  <button
                    className={`nav-dropdown-toggle ${isDropdownActive(item.dropdown) ? 'active' : ''}`}
                    onClick={() => toggleDropdown(item.label)}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                  >
                    {item.label}
                    <span className={`dropdown-arrow ${openDropdown === item.label ? 'open' : ''}`}>▼</span>
                  </button>
                  <div 
                    className={`nav-dropdown ${openDropdown === item.label ? 'open' : ''}`}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className={isActive(dropdownItem.path) ? 'active' : ''}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={isActive(item.path) ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
