import zomato from "../Project/Files/zomato.png";
import { Link } from "react-router-dom";
import { zomatocontext } from "./ZomatoCart";
import { useContext, useState } from "react";

let Navbar = ({ searchText, setSearchText, setSecond }) => {
  let { cart } = useContext(zomatocontext);
  let cartLength = cart.length;

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        zIndex: "1000",
        backgroundColor: "white",
        top: "0px",
      }}
      className="navbar-sticky shadow-sm"
    >
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Logo */}
        <Link to="/">
          <img src={zomato} alt="zomato-logo" width="100px" />
        </Link>

        {/* Search Bar */}
        <div className="search d-flex align-items-center">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search..."
            className="form-control me-2"
          />
        </div>

        {/* Navigation Links */}
        <ul className="nav gap-3">
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item  ">
            <Link className="nav-link text-danger">Orders</Link>
          </li>
          <li className="nav-item position-relative">
            <Link className="nav-link text-danger" to="/cart">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartLength}
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
