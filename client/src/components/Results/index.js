import React, { Component } from 'react';
import Book from "../Book"
import './style.css';

// function Results({ children }) {
//   return (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
// }

class Results extends Component {
  state={
    
  }
  
  render () {
      return (
        <div className="bg-info">
          <Book />
          <Book />
        </div>
      );
  }
}

export default Results;