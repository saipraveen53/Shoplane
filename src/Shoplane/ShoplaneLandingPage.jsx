import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "./ShoplaneContext";
import { useContext } from "react";

const ShoplaneLandingPage = () => {
  let { setapiData, categorydata, setcatageoryData } = useContext(Context);
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  useEffect(() => {
    let apiCall = async () => {
      let res = await axios.get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
      );
      if (res.status === 200) {
        setData(res.data);
        setapiData(res.data);
        setcatageoryData(res.data);
      }
    };

    apiCall();
  }, []);

  return (
    <div style={{ marginTop: "80px" }} className="landBody">
      <Carousel interval={1500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://shoplane.netlify.app/img/img1.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://shoplane.netlify.app/img/img2.png"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://shoplane.netlify.app/img/img4.png"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://shoplane.netlify.app/img/img3.png"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="shoplaneProductsContainer">
        <h3>Clothing For Men and Women</h3>
        <div style={{}} className="productsCardsContainer">
          {categorydata.map((item, i) => (
            <div
              onClick={() => navigate(`/itempage/${item.id}`)}
              key={item.id}
              style={{
                height: "432px",
                width: "215px",
                cursor: "pointer",
              }}
              className="card"
            >
              <img
                src={item.preview}
                alt=""
                style={{ height: "282px", width: "215px" }}
              />
              <h4 style={{ fontSize: "15px", fontWeight: "bold" }}>
                {item.brand}
              </h4>
              <p>{item.name.slice(0, 30)}</p>
              <span style={{ color: "#0CA678", fontWeight: "bold" }}>
                Rs {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoplaneLandingPage;
