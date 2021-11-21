import React from "react";
import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faCheck,
  faClipboard,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="side">
      <div className="brands">
        <div className="brand">
          <FontAwesomeIcon icon={faBlog} />
        </div>
        <div className="brand sport">
          <FontAwesomeIcon icon={faCheck} />
          <div>Sports</div>
        </div>
        <div className="brand">
          <h4>Yeezy</h4>
        </div>
        <div className="brand">
          <FontAwesomeIcon icon={faClipboard} />
        </div>
      </div>

      <div className="setting">
        <div className="icon-setting">
          <FontAwesomeIcon icon={faCog} />
        </div>
        <div className="ver">
          <p>Dragon v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
