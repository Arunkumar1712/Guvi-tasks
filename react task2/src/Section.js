import { useState } from "react";

export function Section({ sa = "", Pro, cpri = "", pri, btn, rating = "", cart, setcart }) {

  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    if (btn === "Add to Cart" && addedToCart) {
      setcart(cart - 1); // Decrement cart value
    } else if (btn === "Add to Cart" && !addedToCart) {
      setcart(cart + 1); // Increment cart value
    }
    setAddedToCart(!addedToCart); // Toggle the addedToCart state
  };

  return (
    <div>
      <div class="container">
        <div class="card col" style={{ width: "16rem", height: "350px" }}>
          {/* <!-- Sale badge--> */}
          <div
            class="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            {sa}
          </div>
          {/* <!-- Product image--> */}
          <img
            class="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..." />
          {/* <!-- Product details--> */}
          <div class="card-body p-4">
            <div class="text-center">
              {/* <!-- Product name--> */}
              <h5 class="fw-bolder">{Pro}</h5>
              <div class="d-flex justify-content-center small text-warning mb-2">
                {rating}
              </div>
              {/* <!-- Product price--> */}
              <span class="text-muted text-decoration-line-through">
                {cpri}
              </span>
              {pri}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              {btn === "Add to Cart" && (
                <button
                  class="btn btn-outline-dark mt-auto"
                  onClick={handleClick} // Attach onClick event handler to the button
                >
                  {addedToCart ? "Remove from Cart" : "Add to Cart"}
                </button>
              )}
              {btn === "View options" && (
                <button
                  class="btn btn-outline-dark mt-auto"
                >
                  {btn}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

