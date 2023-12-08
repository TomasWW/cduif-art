import React from "react";
import "../App.css";
import navImg from "../Assets/Gallery/Show1.jpg";
import { NavBar } from "./NavBar";

export const HomePage = ({
  handleGalleryClick,
  handleHomeClick,
  handleContactClick,
  mainComponent,
  handleWorkshopClick,
}) => {
  return (
    <div className="home-page">
      <header className="div">
        <NavBar
          handleContactClick={handleContactClick}
          handleGalleryClick={handleGalleryClick}
          handleHomeClick={handleHomeClick}
          handleWorkshopClick={handleWorkshopClick}
        />
        <div className="header-container">
          <img className="logo" alt="Img" src={navImg} width={150} />
          <div className="title">CeciDuif</div>
        </div>
      </header>
      {mainComponent}
      <footer>
        <NavBar
          handleContactClick={handleContactClick}
          handleGalleryClick={handleGalleryClick}
          handleHomeClick={handleHomeClick}
          handleWorkshopClick={handleWorkshopClick}
        />
      </footer>
    </div>
  );
};
