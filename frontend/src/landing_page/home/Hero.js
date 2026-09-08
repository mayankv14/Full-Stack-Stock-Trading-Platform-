function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="images/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-5 text-muted fs-2 mb-4">Invest in everything</h1>
        <p className="fs-4 mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <a href="/login" style={{ color: "white", textDecoration: "none" }}>
            Sign up for free
          </a>
        </button>
        {/* <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin:"0 auto"}}><a href="/signin" style={{color: "white", textDecoration: "none"}}>Sign up for free</a></button> */}
      </div>
    </div>
  );
}

export default Hero;
