import React from "react";
import "./style.css";

const footer = {
  Width:"100%",
  height:"100%",
  padding:"20px"
};

function Footer() {
  return (
    <div>
      <footer className="page-footer font-small special-color-dark" style={footer}>
          
              <a id="af"
                className="btn-floating btn-dribbble mx-1"
                href="https://github.com/zhaoyu-qiao/clicky-game"
              >
                Here's the Github Link
              </a>
        
      </footer>
    </div>
  );
}

export default Footer;
