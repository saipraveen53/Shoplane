import { Link } from "react-router-dom";
const SignupPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="signupform"
      >
        <div
          style={{
            background:
              'url("https://t4.ftcdn.net/jpg/05/17/27/83/360_F_517278381_npC0cMTTo14wDSQMHtbM5qI1BN0jhEpB.jpg")',
            height: "700px",
            width: "500px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="signupfeilds"
        >
          <h1 style={{ fontWeight: "bold", color: "white" }}>SignUp</h1>
          <input type="text" placeholder="Enter Username" /> <br />
          <input type="text" placeholder="Enter name" /> <br />
          <input type="email" placeholder="Enter email" /> <br />
          <input type="password" placeholder="Enter password" /> <br />
          <button
            style={{ backgroundColor: "black    ", borderRadius: "20px" }}
            className="btn btn-sm btn-primary"
          >
            Sign Up
          </button>
          <span style={{ color: "black", fontWeight: "bold" }}>
            Already Have an account!
          </span>
          <Link style={{ color: "black", cursor: "pointer" }} to="/login">
            <span style={{ color: "black" }}>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
