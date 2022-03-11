import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Product({productInfo}) {
  const productURL = "/product/" + productInfo.id;

  return (
    <div className="grid-column">
      <div className="product">
        <img width="200" height="200" 
          src={productInfo.src} />
        <Link to={productURL} > <h5>{productInfo.name}</h5></Link> 
        <h5> {productInfo.price} {productInfo.currency}  </h5> 
      </div>
      <br/>
    </div>  
  )
}

export default Product;