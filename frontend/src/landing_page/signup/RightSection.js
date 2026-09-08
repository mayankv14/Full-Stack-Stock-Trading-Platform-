import React, { use, useState } from "react";

function RightSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData ({
      ...formData,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          "content-type" : "application/json"
        },
        body:JSON.stringify(formData)
      });

      const data = await response.json();

      if(response.ok) {
        alert(data.message);

        setFormData({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
      } else {
        alert(data.message);
      }
    } catch(error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="col-6 mt-5">
      <h3 className="text-muted">Signup now</h3>
      <p className="text-muted fs-6">Or track your existing application</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-control mb-3"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="form-control mb-3"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Enter your mobile number"
          className="form-control mb-3"
           value={formData.mobile}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="form-control mb-3"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="btn btn-primary fs-5"
          style={{ width: "300px", height: "55px" }}
        >
          {" "}
          Sign Up
        </button>
      </form>
      <p className="mt-3 fs-9 text-muted">
        Already have an account?{" "}
        <a href="/login" style={{ textDecoration: "none" }}>
          Login
        </a>
      </p>
      <hr></hr>
      <p className="mt-3 text-muted">
        Looking to open NRI account?{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Click here
        </a>
      </p>
    </div>
  );
}

export default RightSection;
