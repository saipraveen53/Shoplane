import { Link } from "react-router-dom";
import { Context } from "./ShoplaneContext";
import { useContext } from "react";
const ShoplaneNavbar = () => {
  let {
    state,
    filtered,
    setFiltered,
    apidata,

    setcatageoryData,
  } = useContext(Context);
  let clothingHandler = () => {
    let clotheItems = apidata.filter((item) => item.isAccessory === false);
    setcatageoryData(clotheItems);
    console.log(clotheItems);
  };
  let electronicsHandler = () => {
    let electricItems = apidata.filter((item) => item.isAccessory === true);
    setcatageoryData(electricItems);
    console.log(electricItems);
  };
  let allHandler = () => {
    setcatageoryData(apidata);
  };

  let cHandler = (e) => {
    setFiltered(e.target.value);
    let filter = apidata.filter((item) =>
      item.name.toLowerCase().includes(filtered.toLowerCase())
    );
    console.log(filter);
    setcatageoryData(filter);
  };

  return (
    <div className="body">
      <div
        style={{
          height: "80px",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "white",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
        className="navbarr"
      >
        <h1 style={{ fontSize: "43px" }}>
          <Link style={{ textDecoration: "none" }} to="/">
            <span style={{ color: "#0CA678" }}>
              <b>SHOP</b>
            </span>
            <span style={{ color: "black" }}>
              <b>LANE</b>
            </span>
          </Link>
        </h1>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <h4
              onClick={clothingHandler}
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              CLOTHING
            </h4>
          </Link>
        </Link>
        <h4
          onClick={electronicsHandler}
          style={{ fontSize: "17px", fontWeight: "bold", cursor: "pointer" }}
        >
          ACCESSORIES
        </h4>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <h4
            onClick={allHandler}
            style={{ fontSize: "17px", fontWeight: "bold", cursor: "pointer" }}
          >
            ALL
          </h4>
        </Link>
        <input
          style={{
            backgroundColor: "#e9ecef",
            padding: "10px 15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "200px",
            height: "40px",
          }}
          type="text"
          value={filtered}
          onChange={cHandler}
          placeholder="🔍 Search For Clothing and Accessories"
        />
        <div style={{ position: "relative" }} className="bade">
          <span style={{ position: "relative" }}>
            <Link style={{ color: "black" }} to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </span>
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              fontSize: "15px",
            }}
          >
            {state.cartItems.length}
          </span>
        </div>
        <span>
          <i class="fa-solid fa-user"></i>
        </span>
      </div>
    </div>
  );
};

export default ShoplaneNavbar;
