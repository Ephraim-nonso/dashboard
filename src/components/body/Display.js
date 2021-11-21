import React from "react";
import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload, faSearch } from "@fortawesome/free-solid-svg-icons";
import Table from "./Table";

const Display = () => {
  return (
    <div className="display">
      <div className="head-search">
        <div className="head">
          <h1>3 tasks selected totally</h1>
        </div>

        <form>
          <div className="search">
            <div className="icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="btn-wrap">
            <FontAwesomeIcon icon={faFileUpload} />
            <div>Import</div>
          </div>
        </form>
      </div>

      <div className="task">
        <Table />
      </div>
    </div>
  );
};

export default Display;
