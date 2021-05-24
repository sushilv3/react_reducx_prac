import react from "react";

const Home = (props) => {
  console.log("props inside from Home componnets props.data", props.data);
  console.log("props inside from Home componnets props", props);
  return (
    <>
      <h2>Home Component</h2>

      <div className="card-wrapper">
        <div className="img-wrapper item">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className="text-wrapper item">
          <span>Product Name</span>
          <span>Price : $200</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ name: "motorola", price: 1000 })
            }
          >
            Add To Cart
          </button>
          <button
          onClick={() =>
            props.removeFromCartHandler()
          }
        >
          remove from Cart
        </button>
        </div>
      </div>
    </>
  );
};
export default Home;
