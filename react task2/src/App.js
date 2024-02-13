import { useState } from "react";
import "./App.css";
import { Footer } from "./Footer";
import { Section } from "./Section";

function App() {
  const[cart,setcart]=useState(0)
  const data = [
    {
      productName: "Fancy Product",
      productPrice: "$40.00 - $80.00",
      buttonName: "View options",
    },
    {
      Sale:"Sale",
      productName: "Special item",
      rating: "⭐⭐⭐⭐⭐",
      crossedpri: "$20.00",
      productPrice: "18.00 ",
      buttonName: "Add to Cart",
    },
    {
      Sale:"Sale",
      productName: "Sale item",
      crossedpri: "$50.00 ",
      productPrice: " 25.00 ",
      buttonName: "Add to Cart",
    },
    {
      productName: "Popular item",
      rating: "⭐⭐⭐⭐⭐",
      productPrice: "$40.00 ",
      buttonName: "Add to Cart",
    },
    {
      Sale:"Sale",
      productName: "Sale item",
      crossedpri: "$50.00 ",
      productPrice: " 25.00 ",
      buttonName: "Add to Cart",
    },
    {
      productName: "Fancy Product",
      productPrice: "$120.00 - $280.00",
      buttonName: "View options",
    },
    {
      Sale:"Sale",
      productName: "Special item",
      rating: "⭐⭐⭐⭐⭐",
      crossedpri: "$20.00",
      productPrice: "18.00 ",
      buttonName: "Add to Cart",
    },
    {
      productName: "Popular item",
      rating: "⭐⭐⭐⭐⭐",
      productPrice: "$40.00 ",
      buttonName: "Add to Cart",
    },
  ];
  return (
    <div className="App">
      <Navbar  cart={cart} setcart={setcart} />
      <div className="product-list">
      {data.map((ele) => (
        <Section
          sa={ele.Sale}
          Pro={ele.productName}
          pri={ele.productPrice}
          cpri={ele.crossedpri}
          btn={ele.buttonName}
          rating={ele.rating}
          cart={cart} setcart={setcart}
        />
      ))}</div>
      <Footer/>
    </div>
  );
}

export default App;

 function Navbar( {cart}) { //passing cart to cart icon
  return (
    <div  >
      <div className="str">
      <nav class="navbar navbar-expand-lg navbar-light bg-light"  style={{height:"90px",alignItems:"center"}}>
        <div class="container px-4 px-lg-5 justify-content-center">
          <a class="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {cart} {/* passing cart value dynamically */}
                   </span>
              </button>
            </form>
          </div>
        </div>
      </nav></div>
      <div>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header></div>
    </div>
  );
}
