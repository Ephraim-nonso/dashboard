import React from "react";
import "./MainContent.css";
import Display from "./Display";
import Sidebar from "./Sidebar";

const MainContent = () => {
  return (
    <main>
      <Sidebar />
      <Display />
    </main>
  );
};

export default MainContent;
