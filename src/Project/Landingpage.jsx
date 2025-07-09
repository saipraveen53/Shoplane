import video from "../Project/Files/ZomatoVideo.mp4";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div>
      <div className="body">
        <div className="video">
          <video className="videofile" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
          <div className="wrapper">
            <div style={{ position: "absolute", top: "300px", left: "200px" }}>
              <h1
                className="headZomato"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "100px",
                  WebkitTextStroke: "0.9px white",
                }}
              >
                <h1 style={{}}>ZOMATO</h1>
              </h1>
              <h2 style={{ color: "white" }}>
                Order Food Online with Zomato – Fast, Easy & Delicious
              </h2>
              <Link style={{ textDecoration: "none" }} to="/home">
                <span
                  className="shover"
                  style={{
                    fontSize: "30px",
                    color: "white",
                    border: "2px solid white",
                    padding: "5px 15px",
                    borderRadius: "25px",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
