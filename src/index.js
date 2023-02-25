import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import namesData from "./data.js";
import "./styles.css";

const renderNameTag = (tag) => <NameTag key={tag.id} name={tag.name} />;

const App = () => {
  const NameTagElements = namesData.map(renderNameTag);
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
