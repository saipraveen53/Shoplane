import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  let navigate = useNavigate();

  let [data, setData] = useState({
    username: "",
    password: "",
  });

  let [text, setText] = useState("");
  let [emptytext, setEmptyText] = useState("");

  let { username, password } = data;

  let changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let clickHandler = () => {
    if (username === "" || password === "") {
      setEmptyText("please enter required crendentials");
      setText("");
      return;
    }

    if (username === "saipraveen" && password === "indhu") {
      setEmptyText("");
      navigate("/home");
    } else {
      return setText("username or password is incorrect");
    }

    console.log(data);
    setData({ username: "", password: "" });
  };

  return (
    <div>
      <div
        style={{ justifyContent: "center", alignItems: "center" }}
        className="loginpagecontainer d-flex"
      >
        <div className="loginpagefeilds">
          <h1 style={{ color: "white" }}>
            <b>LOGIN</b>
          </h1>
          <br />
          <input
            onChange={changeHandler}
            name="username"
            value={username}
            type="text"
            placeholder="Enter Username"
          />
          <br />
          <input
            onChange={changeHandler}
            name="password"
            value={password}
            type="password"
            placeholder="Enter Password"
          />
          <br />
          <p style={{ color: "red" }}>{username ? text : emptytext}</p>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "20px",
            }}
            onClick={clickHandler}
            className="btn btn-sm btn-primary"
          >
            Submit
          </button>
          <span className="text-white">If don't have an account?</span>
          <Link to="/signup">
            <span className="text-white">Create Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
