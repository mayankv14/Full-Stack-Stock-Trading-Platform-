 import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h3 className="fs-1" style={{ color: "#555555" }}>
          Support Portal
        </h3>

        <button
          className="mt-3"
          style={{
            color: "white",
            background: "#367FCF",
            border: "none",
            width: "130px",
            height: "40px",
            borderRadius: "5px",
          }}
        >
          My tickets
        </button>
      </div>

      <div className="row m-3">
        <div className="col-12 p-4">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>

            <input
              type="text"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;