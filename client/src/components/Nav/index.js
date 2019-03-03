import React from "react";
import './style.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="/search">Search</a>
        <a className="nav-item nav-link" href="/saved">Saved</a>
      </div>
      </div>
    </nav>
  );
}

export default Nav;

