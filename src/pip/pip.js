import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Route, useParams } from "react-router-dom";

import Header from "../header/header.js";
import Footer from "../footer/footer.js";

import './pip.css';

const ProductDetails = () => {
  
  let { productID } = useParams();
  const productDetailsURL  = "http://localhost:2001/api/products/detail/"+productID; 
  const checkAvailableStockURL= "http://localhost:2001/api/stock/availability/"+productID;

  const [productInfo , setProductInfo] = useState();
  const [purchasingQuantity , setPurchasingQuantity] = useState(1);
  
  const [availableStock , setAvailableStock] = useState(0);
  const [outOfStock , setOutOfStock] = useState(false);

  useEffect(() => {
    
    fetch(productDetailsURL).then(response => response.json())
    .then(data => {
      setProductInfo( (productInfo) => data ) ; 
    })

    fetch(checkAvailableStockURL).then(response => response.json())
    .then(data => {
      setAvailableStock( (availableStock) => data.stocks ) ; 
    })
  },[]);

  function purchaseProduct(){ 
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productID: productID  , quantity : purchasingQuantity })
    };

    fetch('http://localhost:2001/api/product/purchase/', requestOptions).then((data) => {
      if(data.status===409){
        setOutOfStock ( (outOfStock) => true );
        return ;
      }
      setAvailableStock( (availableStock) => (availableStock- purchasingQuantity)) ;
      if(availableStock === 0){
          setOutOfStock ( (outOfStock) => true );
      } 
    }); 
  }

  function ContianedArticles(){
    
    if(typeof productInfo.contain_articles !== "undefined"){
      return (
        <div>
            <h3>Contained Articles :</h3> 
            <table  >
            <tr  >
              <th >Article Name </th>
              <th >Count</th>
            </tr>
              { productInfo.contain_articles.map( 
                article => ( 
                <tr key = {article.art_id} >
                  <th >{article.name} </th>
                  <th >{article.amount_of}</th>
                </tr>) )} 
            </table>
        </div>
      )
    }else{
      return null;
    }
    
  }
  function AvailableStock(){
    if(availableStock === 0){
      return (
        <div> <h4 style={{color:'red'}}>Out of Stock </h4> </div>
      );
    }else{
      return (
        <div>
          <input type="text" id="qty" value={purchasingQuantity}  onChange={e => setPurchasingQuantity(parseInt(e.target.value))}/>
          <button onClick={purchaseProduct} > Purchase </button> 
          <div> <h5 style={{color:'blue'}}>{availableStock} in stock </h5> </div>
        </div>
      );
    }  
  }

  function ProductInfo(){
    if(typeof productInfo !== "undefined"){
        return (
          <div>
            <Header/>
            <h2 style={{alignItems: "center" , justifyContent: "center" , display: "flex"}} >{productInfo.name}</h2>
            <div className="row">    
              <div className="column" >  
                <img width="550" height="550" 
                  src={productInfo.src} />
              </div>

              <div className="column" >
                <p> Lorem ipsum dolor sit amet, eu quis clita scaevola sed, id vis doming efficiantur, 
                  ius eu mutat iisque explicari. Pro agam deseruisse intellegam eu, intellegebat vituperatoribus has eu.
                  Eum an liber dicunt, ei clita utamur minimum pri. Graece vivendo ne mea, 
                  summo tamquam duo cu, intellegebat definitiones vis eu. Cum everti voluptaria cu.
                  <br/> <br/>
                  Ei vim duis ponderum. Cu mutat habemus quo, ei quis sint semper mea, pri te copiosae qualisque. 
                  Te viderer theophrastus duo, velit dicunt officiis pri ei. 
                  <br/> <br/>

                  Et dolorem neglegentur philosophia duo,
                  cum te dicam recteque. Vel et labore indoctum principes, sed clita inermis dissentiunt te.</p>

                  <ContianedArticles/> 

                  <h5 style={{color:'black'}}> Price : {productInfo.price} {productInfo.currency}  </h5>

                  <AvailableStock/>     
              </div>
            </div>
          </div>
          )
        }else{
          return null;
        }
  }

  return (
    <ProductInfo/>
  )

}
export default ProductDetails;