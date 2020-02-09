import React from "react";
import "./style.css";
const navbar = {
  backgroundColor: "black"
};

function Nav(props) {
  return (
    <div>
      <nav id="nav" className="navbar" style={navbar}>
        <ul>
          <li className="brand">
            <a id="a" href="/">
              Clicky Game{" "}
            </a>{" "}
          </li>{" "}
          <li className="li">Click an image to begin!</li>{" "}
          <li className="li">
            {" "}
            Score: {props.score} | Top Score: {props.highscore}{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  );
}
export default Nav;
