import React from "react";
import MenuLeft from "../MenuLeft/MenuLeft";
import Navbar from "../Navbar/Navbar";

const MainPage = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="" style={{ display: "flex" }}>
        <MenuLeft />
      </div>
    </div>
  );
};

export default MainPage;
