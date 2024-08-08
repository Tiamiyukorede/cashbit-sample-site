import React from "react";

export default function Main() {
  return (
    <>
      <div className="top-container">
        <h1>Pridictable growth starts here.</h1>
        <p>
          Cashbit Gives you full context on every person and company in your
          target market so you can reach and convert more customer Pridictably
        </p>
        <button className="btn-get-started"> Get Started</button>
      </div>
      <section className="top-section">
        <small>Cashsbit is behind the world fastest growing companies</small>
        <div className="flex-logo">
          <p>Segment</p>
          <p>Asna</p>
          <p>Intercom</p>
          <p>Gong</p>
          <p>Hubsport</p>
        </div>
      </section>
      <div className="middle-container">
        <h2>Turn Data into Better Business Outcomes</h2>
        <p className="b2b">
          The most Advanced B2B Companies in the world knows everything about
          their prospect, Lead, Customers. And act instantly and precisly on
          buying signals across the entire buyer&apos;s Journey.
        </p>
        <p className="always-fresh">
          Cashbit&apos;s Activaton platform gives marketing and revenue teams a
          rich always-fresh data foundation and solutionsfor converting demand,
          and accelerationg revenue growth.
        </p>
        <section className="mid-section">
          <div className="genrated">
            <span>300%</span>
            <p>increase in new pipeline generated</p>
          </div>
          <p></p>
          <div className="conversion">
            <span>70%</span>
            <p>increase in form conversions</p>
          </div>
          <p></p>
          <div className="lead">
            <span>60%</span>
            <p>Decrease in cost per Lead</p>
          </div>
        </section>{" "}
        <a href="">
          <button className="explore">Explore the platform</button>
        </a>
      </div>
    </>
  );
}
