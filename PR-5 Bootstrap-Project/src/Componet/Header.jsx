import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="border-bottom">
      <nav className="navbar py-3">
        <div className="container d-flex justify-content-between align-items-center">

          {/* Left Section: Hamburger + Nav links */}
          <div className="d-flex align-items-center">
            {/* Hamburger */}
            <button
              className="btn btn-link text-dark fs-4 d-lg-none me-3"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Nav links (Desktop only) */}
            <ul className="navbar-nav flex-row gap-3 mb-0 d-none d-lg-flex" style={{ fontSize: '13px', fontWeight: '500' }}>
              <li className="nav-item"><a className="nav-link text-dark p-0" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link text-dark p-0" href="#">Pages</a></li>
              <li className="nav-item"><a className="nav-link text-dark p-0" href="#">Women</a></li>
              <li className="nav-item"><a className="nav-link text-dark p-0" href="#">Men</a></li>
              <li className="nav-item"><a className="nav-link text-dark p-0" href="#">Blog</a></li>
            </ul>
          </div>

          {/* Center: Logo */}
          <div className="d-flex justify-content-center flex-grow-1">
            <a className="navbar-brand fw-bold fs-3 m-0 text-center" href="#">
              Salehub
            </a>
          </div>

          {/* Right Section (Desktop only) */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-1">
              <FaSearch />
              <span>Search</span>
            </div>
            <a href="#" className="text-dark text-decoration-none">
              Account
            </a>
            <div className="d-flex align-items-center gap-1 position-relative" style={{ minWidth: '85px' }}>
              <FaShoppingBag />
              <span>My Cart</span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-warning text-dark fw-bold"
                style={{
                  fontSize: '0.7rem',
                  width: '1.2em',
                  height: '1.2em',
                  lineHeight: '1.2em',
                  textAlign: 'center',
                  transform: 'translate(40%, -40%)',
                }}>
                0
              </span>
            </div>
          </div>
        </div>

        {/* Search (Mobile only) */}
        <div className="container d-lg-none mt-2">
          <div className="d-flex align-items-center gap-2">
            <FaSearch />
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
              style={{ fontSize: '13px' }}
            />
          </div>
        </div>

        {/* Mobile Menu Links + Account + Cart */}
        {isOpen && (
          <div className="container d-lg-none mt-3">
            <ul className="navbar-nav d-flex flex-column gap-3 text-center" style={{ fontSize: '13px', fontWeight: '500' }}>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Pages</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Women</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Men</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Blog</a></li>
              <li className="nav-item border-top pt-3">
                <a className="nav-link text-dark" href="#">Account</a>
              </li>
              <li className="nav-item d-flex justify-content-center align-items-center gap-2">
                <FaShoppingBag />
                <span>My Cart (0)</span>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
