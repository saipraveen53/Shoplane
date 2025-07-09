import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css"
 
 
import ZomatoApp from "./Project/ZomatoApp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
    <ShoplaneContext>
               <ShoplaneApp/>
    </ShoplaneContext>
   
   
);

reportWebVitals();
