import ReactDOM from "react-dom";

function Product({productInfo}) {
  return (
    <div className="column">
      <div className="product">
        <img width="200" height="200" 
          src={productInfo.src} />
        <h5>{productInfo.name}</h5>
      </div>
      <br/>
    </div>  
  )
}

export default Product;