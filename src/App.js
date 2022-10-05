import React from "react";
import Header from "./Header";
import "./styles/home.css";

export default function App() {
  return (
    <div className="main">
      <div className="leftMain">
        <h1 className="logo">FOSSIL</h1>

        <div className="bottomLeft">
          <p>Please contact us for any issues: +917467816084</p>
        </div>
      </div>
      <div className="rightMain">
        <Header />
        <div className="box">
          <h4>Enter for a chance</h4>
          <h1>
            Win a <span>Fossil Watch</span> from Astrobelt Time
          </h1>
          <p>
            Inspired by a classical Greek architecture and a perfect compliment
            to any formal or semi-formal ensemble.
          </p>

          <div className="inputBox">
            <label>Eamail Id</label>
            <input type="text" name="email" placeholder="Enter your email Id" />
          </div>

          <div className="inputBox">
            <label>Refer a friend</label>
            <div className="copyBox">
              <div>https://ramavatar.app/_9s0dk</div>
              <span>
                <i class="fa fa-clipboard"></i> Copy
              </span>
            </div>
          </div>

          <div className="btns">
            <button type="button" className="btnFilled">
              SUBMIT
            </button>
            <button type="button" className="btnOutlined">
              LEARN MORE
            </button>
          </div>

          <span className="tAndC">* Terms and Conditions apply</span>
        </div>
      </div>
    </div>
  );
}
