import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Header from "../header/header.js";
import Footer from "../footer/footer.js";


import Product from"./product.js"
import './grid.css';
const PRODUCTS_LIST_END_POINT= "http://127.0.0.1:2001/api/products/" ;

const Grid = () => {

  const ProductsPerPage = 5;

  const [products , setProducts] = useState([]);
  const [pageID , setPageID] = useState(1);
  const [loadMore , setLoadMore] = useState(true);
  
  useEffect(() => {
    const loadProductsURL  = PRODUCTS_LIST_END_POINT+'1'; 
    fetch(loadProductsURL).then(response => response.json())
    .then(data => {
      setProducts( (products) => [...products, ...data] ) ; 
      setPageID( (pageID) => pageID+1 );     
    })
  },[]);

  useEffect(() => {
   if(loadMore === false){
    document.getElementById("loadMoreID").style.display = "none";
   }
  },[loadMore]);

  function loadMoreProducts(){ 
    const loadProductsURL  = PRODUCTS_LIST_END_POINT + parseInt(pageID); 
    fetch(loadProductsURL).then(response => response.json())
    .then(data => {
      setProducts( (products) => [...products, ...data] ); 
      setPageID( (pageID) => pageID+1 );
      if(data.length < ProductsPerPage){
        setLoadMore( (loadMore) => false );
      } 
    }) 
  }

  return (
    <div>
      <Header/>
      
      <h1 style={{alignItems: "center" , justifyContent: "center" , display: "flex"}}> Products Grid </h1> <br/>
      <div className="row">
        {products.map( 
          product => (<Product key={product.id}  productInfo={product} />))} 
      </div> 
      <div style={{alignItems: "center" , justifyContent: "center" , display: "flex"}}>
        <button id="loadMoreID"  onClick={loadMoreProducts} >More ... </button>
      </div>
      <br/>
      <Footer/>
    </div> 
  );
 }

export default Grid;