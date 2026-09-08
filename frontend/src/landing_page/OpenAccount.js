import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-4 mb-4">Open a Zerodha account</h1>
        <p className="fs-5 mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <a href="/login" style={{ color: "white", textDecoration: "none" }}>
            Sign up for free
          </a>
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
