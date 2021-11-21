import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faLock,
  faPlay,
  faStop,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="empty"></div>

      <div className="filled">
        <div className="fx icon-cap">
          <FontAwesomeIcon icon={faLock} />
          <h6>Capcha</h6>
        </div>

        <div className="task-detail">
          <div className="fx tasks">
            <FontAwesomeIcon icon={faCheckCircle} />
            <h6>Completed</h6>
          </div>
          <div className="fx deleted">
            <FontAwesomeIcon icon={faTrashAlt} />
            <h6>Deleted</h6>
          </div>
        </div>

        <div className="play-content">
          <div className="fx play">
            <FontAwesomeIcon icon={faPlay} />
            <h6>Played</h6>
          </div>
          <div className="fx stop">
            <FontAwesomeIcon icon={faStop} />
            <h6>Stopped</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
