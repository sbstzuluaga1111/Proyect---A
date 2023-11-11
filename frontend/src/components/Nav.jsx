import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';

import '../css/Nav.css';

const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    handleCloseModal();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link"><button className='btn btn-dark'>Home</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link"><button className='btn btn-dark'>Products</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link"><button className='btn btn-dark'>Contact</button></NavLink>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="navbar-brand">Hidden brand</span>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-warning" onClick={handleLoginClick}>
                  Login
                </button>
                <LoginModal showModal={showModal} onClose={handleCloseModal} onLogin={handleLogin} />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
