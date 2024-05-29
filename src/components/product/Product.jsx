/* eslint-disable react/prop-types */

import './Product.css';

function Product(props) {
  console.log(props)
  const {name, image, price} = props.product
  return (
    <div className="furniture-card">
      <img
        className=""
        src={image}
        style={{width:"100%", height:"50%"}}
        alt=""
      />
      <h3>{name}</h3>
      <h4>Price {price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
