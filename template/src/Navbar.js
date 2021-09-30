import React, { useRef } from 'react';
import './Navbar.bootstrap.scss';
import styles from './Navbar.module.scss';

function Navbar() {
  const elementButton = useRef(null);
  const elementCollapse = useRef(null);

  return (
    <nav className={`${styles.Nav} navbar navbar-expand-lg sticky-top navbar-dark`}>
      <div className="container">
        <a className="navbar-brand me-auto" href="">
          <span className="me-5">Site Name</span>
        </a>
        <button
          ref={elementButton}
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            const button = elementButton.current;
            const collapse = elementCollapse.current;
            if (!(button && collapse)) {
              return;
            }
            const open = button.getAttribute('aria-expanded') === 'false'
            if (open) {
              button.setAttribute('aria-expanded', 'true');
              button.className = 'navbar-toggler';
              collapse.className = 'collapse navbar-collapse show';
            } else {
              button.setAttribute('aria-expanded', 'false');
              button.className = 'navbar-toggler collapsed';
              collapse.className = 'collapse navbar-collapse';
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={elementCollapse}
          id="navbarScroll"
          className="collapse navbar-collapse"
        >
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
