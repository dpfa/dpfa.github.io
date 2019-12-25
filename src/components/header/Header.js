import React, { useState, useEffect } from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="site-header">
      <div className="row">
        <div className="col">
          <h4>
            {props.name}
          </h4>
        </div>
        <div className="col">
          <div id="tagline">
            <p>{props.tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
