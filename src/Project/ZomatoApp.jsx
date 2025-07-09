import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Landingpage from "./Landingpage";
import ZomatoHome from "./ZomatoHome";
import Loginpage from "./Loginpage";
import SignupPage from "./SignupPage";
import ZomatoCARTT from "./ZomatoCARTT";
import ZomatoCart from "./ZomatoCart";
import { useState } from "react";

const ZomatoApp = () => {
  let [searchText, setSearchText] = useState("");
  let [second, setSecond] = useState("");
  return (
    <div>
      <ZomatoCart>
        <Router>
          <Navbar
            second={second}
            setSecond={setSecond}
            searchText={searchText}
            setSearchText={setSearchText}
          />

          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route
              path="/home"
              element={
                <ZomatoHome
                  second={second}
                  setSecond={setSecond}
                  searchText={searchText}
                />
              }
            />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<ZomatoCARTT />} />
          </Routes>
        </Router>
      </ZomatoCart>
    </div>
  );
};

export default ZomatoApp;
