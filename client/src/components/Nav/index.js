import React from "react";
import './style.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="/search">Search <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="/saved">Saved</a>
      </div>
      </div>
    </nav>
  );
}

export default Nav;

