import React from "react";
import './style.css';

function Book(props) {
  return (
    <div class="container">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4 imageHolder">
            <img src={props.image} alt={props.title}></img>
          </div>
          <div className="col-md-8">
            <div className="card-header">{props.title}</div>
            <div className="card-body">
              <h6 className="card-title">{ props.subtitle }</h6>
              <h6 className="card-text">Authors: 
                {props.authors.map(author => {
                  return (
                    <span key={author}> {author}</span>
                  );
                })}
              </h6>
              <h6 className="card-text">{props.description}</h6>
              <a href={props.link}>
                <button class="btn btn-primary btn-lg active" >View</button>
              </a>
              <button class="btn btn-primary btn-lg active deleteBtn"  onClick={() => props.handleClick(props)}>{ props.clickType } </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;


