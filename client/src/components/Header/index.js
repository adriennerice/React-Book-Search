import React from "react";
import './style.css';

function Header({children}) {
  return (
    <div className="jumbotron">
      {children}
    </div>
  );
}

export default Header;