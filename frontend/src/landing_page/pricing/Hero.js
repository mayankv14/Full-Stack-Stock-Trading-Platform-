import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom">
        <h3 className="text-center">Charges</h3>
        <p className="text-muted text-center fs-5">
          List of all charges and taxes
        </p>
      </div>
      <div className="row p-5 mt-5 ">
      <div className="col-4 p-5">
        <img src="images/pricingEquity.svg" style={{ width: "80%" }} />
        <h2 className="mb-4">Free equity delivery</h2>
        <p className="text-muted">
          All equity delivery investments (NSE, BSE),<br></br>are absolutely
          free — ₹ 0 brokerage.
        </p>
      </div>
      <div className="col-4 p-5">
        <img src="images/intradayTrades.svg" style={{ width: "80%" }} />
        <h2 className="mb-4">Intraday and F&O trades</h2>
        <p className="text-muted">
          Flat ₹ 20 or 0.03% (whichever is lower) per<br></br> executed order on intraday
          trades across<br></br>equity, currency, and commodity trades. Flat ₹20 on all
          option trades.
        </p>
      </div>
      <div className="col-4 p-5">
        <img src="images/pricingEquity.svg" style={{ width: "80%" }} />
        <h2>Free direct MF</h2>
        <p className="text-muted">
          All direct mutual fund investments are<br></br> absolutely free — ₹ 0
          commissions & <br></br>DP charges.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Hero;
