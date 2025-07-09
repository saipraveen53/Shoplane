import { useState, useEffect } from "react";
import { zomatocontext } from "./ZomatoCart";
import { useContext } from "react";
import { motion } from "framer-motion";

const ZomatoHome = ({ searchText, second }) => {
  let { dispatch } = useContext(zomatocontext);
  console.log(second);
  const [fooddata] = useState([
    {
      name: "Fish Fry",
      category: "riceitem",
      restraunt: "mehfil",
      price: 12.99,
      personName: "Rahul",
      image: "https://m.media-amazon.com/images/I/61ScTIRG0kL.jpg",
    },
    {
      name: "Pulihora",
      category: "riceitem",
      restraunt: "mehfil",
      price: 12.99,
      personName: "Rahul",
      image:
        "https://thumbs.dreamstime.com/b/bowl-rice-vegetables-peas-325005999.jpg",
    },
    {
      name: "Pizza",
      price: 12.99,
      personName: "Rahul",
      restraunt: "mehfil",
      category: "riceitem",
      image:
        "https://static.vecteezy.com/system/resources/previews/030/660/317/large_2x/pizza-with-white-background-high-quality-ultra-hd-free-photo.jpg",
    },
    {
      name: "Burger",
      restraunt: "mehfil",
      category: "riceitem",
      price: 8.49,
      personName: "Aisha",
      image:
        "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=",
    },
    {
      name: "Pasta",
      category: "riceitem",
      restraunt: "mehfil",
      price: 10.99,
      personName: "Vikram",
      image:
        "https://media.istockphoto.com/id/495231784/photo/penne-pasta.jpg?s=612x612&w=0&k=20&c=s6i39tglMyw0sQVsJtZlYSxINgrfoMW8ACg0gS_1tuw=",
    },
    {
      name: "Biryani",
      category: "starter",
      restraunt: "mehfil",
      price: 11.5,
      personName: "Sana",
      image:
        "https://t3.ftcdn.net/jpg/05/66/68/36/360_F_566683667_BeBecGFABNQYkZhquqJxhSj7UOcCY7ZJ.jpg",
    },
    {
      name: "Tacos",
      category: "starter",
      restraunt: "bawarchi",
      price: 9.25,
      personName: "Arjun",
      image:
        "https://media.istockphoto.com/id/459396345/photo/taco.jpg?s=612x612&w=0&k=20&c=_yCtd6OEb2L8xNal4kC1xvm8HoBp8sry6tcBwmxmPHw=",
    },
    {
      name: "Sushi",
      category: "starter",
      restraunt: "bawarchi",
      price: 14.75,
      personName: "Meera",
      image:
        "https://c4.wallpaperflare.com/wallpaper/802/1011/616/sushi-caviar-white-background-wallpaper-preview.jpg",
    },
    {
      name: "Dosa",
      category: "starter",
      restraunt: "bawarchi",
      price: 7.99,
      personName: "Kiran",
      image:
        "https://t3.ftcdn.net/jpg/04/09/16/58/360_F_409165817_Gqjkeb3I5aGf08SLAlNjUtP1tMN9mE4s.jpg",
    },
    {
      name: "Shawarma",
      category: "starter",
      restraunt: "bawarchi",
      price: 8.99,
      personName: "Neha",
      image:
        "https://t3.ftcdn.net/jpg/06/72/68/02/360_F_672680295_4ZLh1jK9s4sd9FHyOTuhsw9GNmVJrX4S.jpg",
    },
    {
      name: "Noodles",
      category: "starter",
      restraunt: "bawarchi",
      price: 9.0,
      personName: "Ravi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzKy8bnyk5PJ8ufIUm6y5ZDz_tgYUvd5gWBA&s",
    },
    {
      name: "Ice Cream",
      category: "riceitem",
      restraunt: "bawarchi",
      price: 5.5,
      personName: "Anjali",
      image:
        "https://c4.wallpaperflare.com/wallpaper/489/37/87/ice-cream-4k-new-full-hd-wallpaper-preview.jpg",
    },
  ]);

  // Filters state
  const [filters, setFilters] = useState({
    restraunt: "",
    category: "",
    priceSort: "",
  });

  const [displayData, setDisplayData] = useState(fooddata);

  // Update filtered and sorted data whenever filters change
  useEffect(() => {
    let filtered = [...fooddata];

    if (searchText && searchText.trim() !== "") {
      const searchLower = searchText.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLower) ||
          item.restraunt.toLowerCase().includes(searchLower)
      );
    }

    // Filter by restaurant
    if (filters.restraunt) {
      filtered = filtered.filter(
        (item) => item.restraunt === filters.restraunt
      );
    }

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter((item) => item.category === filters.category);
    }

    // Sort by price
    if (filters.priceSort === "mintomax") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.priceSort === "maxtomin") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setDisplayData(filtered);
  }, [filters, fooddata, searchText]);

  // Handle select changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ marginTop: "77px" }}>
      {/* Inspiration section */}
      <div className="homebody card shadow p-5 ">
        <div className="tagline mb-3">
          <h1 style={{ fontWeight: "bold", fontFamily: "cursive" }}>
            Inspiration for Your First Order
          </h1>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: "100px",
          }}
          className="picscontainer d-flex "
        >
          {[
            {
              label: "Biryani",
              img: "https://img.freepik.com/premium-photo/chicken-biryani-plate-isolated-white-background-delicious-spicy-biryani-isolated_667286-5794.jpg?w=360",
            },
            {
              label: "Pizza",
              img: "https://t3.ftcdn.net/jpg/02/20/70/50/360_F_220705014_3QM4df2AekmpPtScUrj27CvIH0YUGTXA.jpg",
            },
            {
              label: "Burger",
              img: "https://img.freepik.com/premium-photo/burger-top-view-white-backgroundd_102583-1293.jpg",
            },
            {
              label: "Chicken",
              img: "https://img.freepik.com/premium-photo/delicious-chicken-curry-isolated-white-background_787273-48677.jpg",
            },
            {
              label: "Shawarma",
              img: "https://www.shutterstock.com/image-photo/doner-kebab-shawarma-isolated-on-600nw-2029580117.jpg",
            },
            {
              label: "Cake",
              img: "https://c4.wallpaperflare.com/wallpaper/599/227/725/cake-4k-for-pc-wallpaper-preview.jpg",
            },
          ].map(({ label, img }) => (
            <div
              key={label}
              style={{ textAlign: "center", cursor: "pointer" }}
              className="images"
            >
              <img
                style={{
                  borderRadius: "75px",
                  objectFit: "cover",
                }}
                src={img}
                alt={label}
                width="150px"
                height="150px"
              />
              <h3>{label}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div style={{ textAlign: "center" }} className="card-block mt-3">
        <h1 style={{ fontWeight: "bold" }}>Order Your Food</h1>
        <select
          className="form-select w-auto d-inline-block"
          style={{ display: "" }}
          name="restraunt"
          onChange={handleFilterChange}
          value={filters.restraunt}
        >
          <option value="">Select Restaurant</option>
          <option value="mehfil">Mehfil</option>
          <option value="bawarchi">Bawarchi</option>
        </select>
        &nbsp;
        <select
          className="form-select w-auto d-inline-block"
          name="category"
          onChange={handleFilterChange}
          value={filters.category}
        >
          <option value="">Select Food</option>
          <option value="riceitem">Rice items</option>
          <option value="starter">Starters</option>
        </select>
        &nbsp;
        <select
          className="form-select w-auto d-inline-block"
          name="priceSort"
          onChange={handleFilterChange}
          value={filters.priceSort}
        >
          <option value="">Select Price</option>
          <option value="mintomax">Min to Max</option>
          <option value="maxtomin">Max to Min</option>
        </select>
        {/* Food cards */}
        <div
          style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}
          className="cards-container p-4"
        >
          {displayData.length > 0 ? (
            displayData.map((item, i) => (
              <div
                key={i}
                style={{
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="itemcard card text-center d-flex"
              >
                <img
                  className="imagee"
                  style={{
                    objectFit: "cover",
                  }}
                  src={item.image}
                  alt={item.name}
                  width="200px"
                  height="200px"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "15px",
                    gap: "0px",
                  }}
                >
                  <h5>{item.name}</h5>
                  <p style={{ marginBottom: "5px" }}>
                    Price: &#8377;{item.price}
                  </p>
                  <button
                    onClick={() => {
                      dispatch({ type: "ADD", payload: item });
                    }}
                    style={{
                      border: "1px solid black",
                      borderRadius: "21px",
                      padding: "5px 10px",
                      marginBottom: "10px",
                      cursor: "pointer",
                      height: "39px ",
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="iconsbody"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
          WebkitTextStroke: "0px black",
          flexDirection: "column",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            height: "100px",
            alignItems: "center",
            fontSize: "30px",
            color: "white",
            padding: "10px",
          }}
          className="iconsContainer"
        >
          <i style={{ cursor: "pointer" }} className="bi bi-facebook"></i>
          <i style={{ cursor: "pointer" }} className="bi bi-twitter"></i>
          <i style={{ cursor: "pointer" }} className="bi bi-google"></i>
          <i style={{ cursor: "pointer" }} className="bi bi-youtube"></i>
          <i style={{ cursor: "pointer" }} className="bi bi-instagram"></i>
          <i style={{ cursor: "pointer" }} className="bi bi-linkedin"></i>
          <i style={{ cursor: "pointer" }} className="bi bi-wikipedia"></i>
        </div>
        <span style={{ fontSize: "23px", color: "white" }}>
          &copy;2025 All Rights Reserved
        </span>
      </motion.div>
      <div
        style={{ padding: "20px", backgroundColor: "black" }}
        className="footer"
      >
        <footer className="footerContainer">
          <div className="heading d-flex justify-content-center align-items-center text-center gap-5">
            <div style={{ width: "100px", height: "200px" }} className="p1  ">
              <h6
                style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}
              >
                The App For Best Food
              </h6>
            </div>
            <div
              style={{ fontSize: "20px", color: "white" }}
              className="p2 text-center"
            >
              <h3 style={{ fontWeight: "bold", fontSize: "20px" }} className="">
                Company
              </h3>
              <p style={{ marginBottom: "5px", fontSize: "15px" }}>About</p>
              <p style={{ marginBottom: "5px", fontSize: "15px" }}>
                Press Centers
              </p>
              <p style={{ marginBottom: "5px", fontSize: "15px" }}>Careers</p>
            </div>
            <div style={{ color: "white" }} className="p3">
              <h3 style={{ fontWeight: "bold", fontSize: "20px" }} className="">
                Zomato
              </h3>
              <p style={{ marginBottom: "5px", fontSize: "15px" }}>About</p>
              <p style={{ marginBottom: "5px", fontSize: "15px" }}>Support</p>
              <p style={{ marginBottom: "5px", fontSize: "15px" }}>Careers</p>
            </div>
            <div style={{ color: "white" }} className="p4">
              <h3 style={{ fontWeight: "bold", fontSize: "20px" }} className="">
                FaQ
              </h3>
              <p style={{ marginBottom: "5px", fontSize: "15px" }}>About</p>
              <p style={{ marginBottom: "5px", fontSize: "15px" }}>Contact</p>
              <p style={{ marginBottom: "5px", fontSize: "15px" }}>Careers</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ZomatoHome;
