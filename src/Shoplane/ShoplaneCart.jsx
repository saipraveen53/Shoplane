import { useContext } from "react";
import { Context } from "./ShoplaneContext";

const ShoplaneCart = () => {
  const { state, dispatch } = useContext(Context);

  const totalMoney = state.cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_4INOZPgnCu4YZa",
      amount: totalMoney * 100,
      currency: "INR",
      name: "Shoplane",
      description: "Thank you for shopping with us!",
      image: "https://your_logo_url.png",
      handler: function (response) {
        dispatch({ type: "RESET" });
        alert(
          " Payment successful! \nPayment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Your Name",
        email: "email@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#0CA678",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div style={{ marginTop: "80px" }} className="cartContainer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 className="cartTitle">🛒 Your Cart</h3>
        <button className="btn btn-sm btn-primary" onClick={handlePayment}>
          Pay Now
        </button>
        <h4>Total: ₹{totalMoney}</h4>
      </div>

      {state.cartItems.length === 0 ? (
        <p className="emptyCart">Your cart is empty.</p>
      ) : (
        <div className="cartBody">
          {state.cartItems.map((item) => (
            <div className="cartItem" key={item.id}>
              <img className="cartImg" src={item.preview} alt={item.name} />
              <div className="cartInfo">
                <h4>{item.name}</h4>
                <h4>₹ {item.price}</h4>
              </div>
              <button
                className="removeBtn"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoplaneCart;
