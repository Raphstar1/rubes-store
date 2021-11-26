import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>RUBES STORE</h2>
        <div className="marquee">
        <marquee behavior="scroll" direction="right">WELCOME TO RUBES STORE</marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
