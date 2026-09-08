 import React from 'react';

function Pricing() {
    return (
        <div className="container ">
            <div className="row align-items-center">

                {/* Left side */}
                <div className="col-md-5 text-start">
                    <h2 className="fs-3 mb-3">
                        Unbeatable pricing
                    </h2>

                    <p className="text-muted">
                        We pioneered the concept of discount broking and price
                        <br />
                        transparency in India. Flat fees and no hidden charges.
                    </p>

                    <a href="#" style={{ textDecoration: "none" }}>
                        See pricing <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                {/* Right side */}
                <div className="col-md-7 mb-5 ">
                    <div className="row">

                        <div className="col-4 d-flex align-items-center gap-2">
                            <img
                                src="images/pricingMF.svg"
                                style={{ width: "130px" }}
                                alt=""
                            />
                            <small>Free account opening</small>
                        </div>

                        <div className="col-4 d-flex align-items-center gap-2">
                            <img
                                src="images/pricingEquity.svg"
                                style={{ width: "130px" }}
                                alt=""
                            />
                            <small>Free equity delivery and direct mutual funds</small>
                        </div>

                        <div className="col-4 d-flex align-items-center gap-2">
                            <img
                                src="images/intradayTrades.svg"
                                style={{ width: "130px" }}
                                alt=""
                            />
                            <small>Intraday and F&amp;O</small>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;