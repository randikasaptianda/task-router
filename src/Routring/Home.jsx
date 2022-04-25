import React from "react";
import logo from "../Routring/img/saya4.jpg";

const Home = () => {
  return (
    <div className="Header">
      <header className="Header-section ">
        <img src={logo} className="Header-logo " alt="randika" />
        <p className="info">
          <b>
            {" "}
            Randika Saptianda
            <br />
            Electrical Engeneering || Web Programmer
          </b>
        </p>
      </header>
    </div>
  );
};

export default Home;
