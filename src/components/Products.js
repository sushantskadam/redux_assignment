import React, { useState, useEffect } from "react";
import data from "./product.json";
import { connect } from "react-redux";
function Products(props) {
  const [prodata, setProdata] = useState([]);
  const [prodid, setProdid] = useState([]);

  useEffect(() => {
    setProdata(data.product);
    if (localStorage.getItem("mycart")) {
      let arr = JSON.parse(localStorage.getItem("mycart"));
      props.counter(arr);
    }
  }, []);

  const addCart = (id) => {
    if (localStorage.getItem("mycart")) {
      let arr = JSON.parse(localStorage.getItem("mycart"));

      if (arr.includes(id)) {
        alert("Product Already Added");
      } else {
        arr.push(id);

        localStorage.setItem("mycart", JSON.stringify(arr));
        setProdid(arr);
        props.counter(arr);
        alert("Product added to Cart");
      }
    } else {
      let arr = [];
      arr.push(id);
      setProdid(arr);
      localStorage.setItem("mycart", JSON.stringify(arr));
      props.counter(arr);
      alert("Product added to Cart");
    }
  };

  return (
    <div className="container-fluid row">
      {prodata.map((prod, id) => (
        <div className="card col-md-2 m-3" key={id}>
          <img className="card-img-top" src={prod.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{prod.pname}</h5>
            <p className="card-text">Price: {prod.price}</p>
            {/* <p className="card-text">Quantity: {prod.quantity}</p> */}
            <button
              className="btn btn-primary"
              onClick={() => addCart(prod.id)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    counter: function (arr) {
      dispatch({ type: "count", payload: arr });
    },
  };
};

export default connect(null, mapDispatchToProps)(Products);
