import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "../header/header.js";
import Footer from "../footer/footer.js";

import './pip.css';

const ProductDetails = ({productID}) => {
  const productDetailsURL  = "http://localhost:2001/api/products/detail/"+productID; 
  const checkAvailableStockURL= "http://localhost:2001/api/stock/availability/"+productID;
  const [productInfo , setProductInfo] = useState(1);
  const [purchasingQuantity , setPurchasingQuantity] = useState(1);
  
  const [availableStock , setAvailableStock] = useState(0);
  const [outOfStock , setOutOfStock] = useState(false);

  useEffect(() => {
    alert();
    fetch(productDetailsURL).then(response => response.json())
    .then(data => {
      setProductInfo( (productInfo) => data ) ; 
    })

    fetch(checkAvailableStockURL).then(response => response.json())
    .then(data => {
      setAvailableStock( (availableStock) => data ) ; 
    })

  },[]);

  async function purchaseProduct(){ 
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productID: productID  , quantity : purchasingQuantity })
    };
    const response = await fetch('http://localhost:2001/api/product/purchase/', requestOptions);
    if(response.status===409){
      setOutOfStock ( (outOfStock) => true );
    }else{
      const data = await response.json();
      alert("Purchase Success");
    }
  }

  return (
    <div>
       <Header/>
       <div className="row">
        <div className="column" >  
        <img width="600" height="600" 
          src={productInfo.src} />
        <h5 style={{alignItems: "center" , justifyContent: "center" , display: "flex"}} >{productInfo.name}</h5>
        </div>
        <div className="column" >
          <p> <h3>Lorem ipsum dolor sit amet, eu quis clita scaevola sed, id vis doming efficiantur, 
            ius eu mutat iisque explicari. Pro agam deseruisse intellegam eu, intellegebat vituperatoribus has eu.
             Eum an liber dicunt, ei clita utamur minimum pri. Graece vivendo ne mea, 
             summo tamquam duo cu, intellegebat definitiones vis eu. Cum everti voluptaria cu.
             <br/> <br/>
            Ei vim duis ponderum. Cu mutat habemus quo, ei quis sint semper mea, pri te copiosae qualisque. 
            Te viderer theophrastus duo, velit dicunt officiis pri ei. 
            <br/> <br/>

             Et dolorem neglegentur philosophia duo,
             cum te dicam recteque. Vel et labore indoctum principes, sed clita inermis dissentiunt te.</h3></p>

             <input type="text" id="qty" name="quantity" value={purchasingQuantity} onInput={e => setPurchasingQuantity(parseInt(e.target.value))}/>
             <button onClick={purchaseProduct} > Purchase </button>  {availableStock} in stock
        </div>
      </div>
      
      </div>
  )
}
export default ProductDetails;