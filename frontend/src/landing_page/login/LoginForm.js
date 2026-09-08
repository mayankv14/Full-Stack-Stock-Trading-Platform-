 import React, {useState} from "react";

function LoginSection() {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:3002/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if(response.ok) {
                localStorage.setItem("token", data.token);
                window.location.href = `http://localhost:3001?token=${data.token}`;
            } else {
                alert(data.message);
            }
        } catch(error) {
            console.log(error);
            alert("something went wrong");
        }
    };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">

          {/* Logo */}
          <img
            src="/images/logo.png"
            style={{ width: "100px" }}
            className="mt-5 mb-4"
          />

          {/* Heading */}
          <h3 className="mb-4 text-muted">Login to Kite</h3>

          {/* Login Form */}
          <form onSubmit={handleLogin}>

            {/* Phone / Email */}
            <div className="text-start mb-3">
              <label className="form-label">
                Phone number or Email
              </label>

              <input
                type="text"
                placeholder="Phone number or Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="text-start mb-3">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 mt-2"
            >
              Login
            </button>

            {/* Forgot Password */}
            <p className="mt-4">
              <a href="#" className="text-decoration-none">
                Forgot password?
              </a>
            </p>

            {/* Signup */}
            <p className="mt-4">
              Don't have an account?
              <br />
              <a href="/signup" className="text-decoration-none">
                Sign up
              </a>
            </p>

          </form>

        </div>
      </div>
    </div>
  );
}

export default LoginSection;