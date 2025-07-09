import { useContext, useState } from "react";
import { zomatocontext } from "./ZomatoCart";

const ZomatoCARTT = () => {
  const { cart, dispatch } = useContext(zomatocontext);
  const cartLength = cart.length;
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  let [text, setText] = useState("");

  let nullHandler = () => {
    setText(nullHandler);
  };

  const handlePayment = () => {
    if (cartLength === 0) {
      setText("Please select your order");
      return;
    }

    const options = {
      key: "rzp_test_4INOZPgnCu4YZa",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Zomato Pvt. Ltd",
      description: "Payment for your order",
      handler: function (response) {
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
        dispatch({ type: "EMPTY" });
        setText("");
      },
      prefill: {
        name: "SaiPraveen",
        email: "bubududu5533@gmail.com",
        contact: "+916302468574",
      },
      theme: { color: "#121212" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h2 className="mb-4 text-center">Your Cart</h2>

      <div className="d-flex justify-content-center mb-4">
        <div className="d-flex gap-5 text-center">
          <h5>Total: ₹{totalPrice}</h5>
          <h5>Quantity: {cartLength}</h5>
          <button onClick={handlePayment} className="btn btn-sm btn-warning">
            Pay Now
          </button>
        </div>
      </div>

      {cartLength > 0 ? (
        <div className="row g-4 justify-content-center">
          {cart.map((item, i) => (
            <div key={i} className="col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="card shadow text-center h-100">
                <img
                  src={item.image}
                  className="card-img-top p-3"
                  alt={item.name}
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title mb-2">{item.name}</h6>
                  <p className="card-text mb-1">₹{item.price}</p>
                  <p className="card-text text-muted">{item.restraunt}</p>
                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => dispatch({ type: "REMOVE", payload: i })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">
          <h5>Your cart is empty 🛒</h5>
          <p style={{ fontWeight: "bold", color: "red" }}>{text}</p>
        </div>
      )}
    </div>
  );
};

export default ZomatoCARTT;
