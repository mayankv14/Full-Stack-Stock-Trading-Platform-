 import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="images/education.svg"
            alt="Education"
            style={{ width: "70%" }}
          />
        </div>

        <div className="col-6">
          <h2 className="mb-3 fs-3">Free and open market education</h2>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="https://zerodha.com/varsity/"
            style={{ textDecoration: "none" }}
          >
            Varsity{" "}
            <i
              className="fa-solid fa-arrow-right"
              aria-hidden="true"
            ></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="https://tradingqna.com/"
            style={{ textDecoration: "none" }}
          >
            TradingQ&A{" "}
            <i
              className="fa-solid fa-arrow-right"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;