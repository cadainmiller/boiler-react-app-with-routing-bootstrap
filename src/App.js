import React from "react";
import "./App.css";
function BuildTemplate() {
  const template = (
    <div className="container py-4">
      <div className="card">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );

  return template;
}

function App() {
  return BuildTemplate();
}

export default App;
