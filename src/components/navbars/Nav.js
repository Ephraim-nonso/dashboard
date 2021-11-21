import React from "react";
import "./Nav.css";
import Avatar from "../assets/Ellipse 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="avatar">
            <div className="image">
              <img src={Avatar} alt="avatar" />
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
