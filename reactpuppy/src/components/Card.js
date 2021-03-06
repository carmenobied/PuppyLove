import React from "react";
import Button from "../Button";

function Card(props) {
  return (
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>I'm a jumbotron!</p>
        <p>
          <button className="btn btn-primary btn-lg">Learn more</button>
        </p>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
  );
}

export default HelloBootstrap;
