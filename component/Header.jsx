import React from "react";

export default function Header() {
  return (
    <>
      <div className="nav">
        <span>
          <img src={"../images/bitcoin (2).png"} alt="" />
          Cashbit
        </span>
        <ul>
          <li>Solutions</li>
          <li>Platform</li>
          <li>Customers</li>
          <li>Company</li>
          <li>Recourse</li>
        </ul>
        <div className="clickable">
          <button className="login-btn">Login</button>
          <button className="start-btn">Get Started</button>
        </div>
      </div>
    </>
  );
}
