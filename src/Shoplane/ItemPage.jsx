import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./ShoplaneContext";

const ItemPage = () => {
  const { state, dispatch } = useContext(Context);
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const apicall = async () => {
      try {
        const res = await axios.get(
          `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`
        );
        if (res.status === 200) {
          setItem(res.data);
          setSelectedImage(res.data.preview);
        }
      } catch (err) {
        console.error("Error fetching item:", err);
      }
    };

    apicall();
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div
      style={{ marginTop: "80px", marginBottom: "40px" }}
      className="shoplaneItemPage"
    >
      <div className="itempagecontainer" style={{ display: "flex" }}>
        <div
          className="imgcontainer"
          style={{
            width: "460px",
            padding: "10px",
            marginRight: "20px",
          }}
        >
          <img
            style={{ width: "inherit" }}
            src={selectedImage}
            alt={item.name}
          />
        </div>
        <div
          className="infoContainer"
          style={{
            width: "695px",
            paddingTop: "50px",
            paddingLeft: "30px",
          }}
        >
          <h1>{item.name}</h1>
          <h4>{item.brand}</h4>
          <h5>Price: {item.price}</h5>
          <h4>Description</h4>
          <h5>{item.description.slice(0, 100)}</h5>

          <h5>Product Preview</h5>
          <div
            className="childimagesContainer"
            style={{ display: "flex", gap: "20px", marginTop: "10px" }}
          >
            {item.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`preview-${index}`}
                onClick={() => setSelectedImage(photo)}
                style={{
                  height: "85px",
                  width: "67px",
                  cursor: "pointer",
                  border:
                    selectedImage === photo
                      ? "3px solid #0CA678"
                      : "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "2px",
                  boxSizing: "border-box",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
            className="btn btn-sm btn-primary w-25"
            style={{
              marginTop: "20px",
              backgroundColor: "#0CA678",
              borderColor: "#0CA678",
              fontWeight: "bold",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
