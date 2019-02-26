import React from "react";
import './style.css';

function Search() {
  return (
    <div className="bg-secondary">
      <h3>Book Search</h3><br></br>
      
      <form>
      <h5>Book</h5>
      <input type="text" /><button>Search</button>
      </form>
    </div>
  );
}

export default Search;
