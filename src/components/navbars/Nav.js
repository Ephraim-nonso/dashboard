import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="nav-section">
      <div></div>
      <nav>
        <ul className="nav-items">
          <li>Tasks</li>
          <li>Profile</li>
          <li>Order</li>
          <li>Setting</li>
        </ul>

        <div className="bell-avatar nav-items">
          <div className="bell">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="avatar">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
