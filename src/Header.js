import React, { useState } from "react";
import "./styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="displayFlex">
        <h1 className="logo_dark">FOSSIL</h1>
        <div
          className="menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <i class="fa fa-times"></i> : <i class="fa fa-bars"></i>}
        </div>
      </div>

      {isOpen && (
        <ul className="headerMain">
          <li>Home</li>
          <li>Watches</li>
          <li className="active">
            Giveaways
            <div className="line" />
          </li>
          <li>Contact Us</li>
        </ul>
      )}
    </>
  );
}
