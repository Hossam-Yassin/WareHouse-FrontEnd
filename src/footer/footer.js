import ReactDOM from "react-dom";

function Footer({productInfo}) {
  return (
    <div style={{alignItems: "center" , justifyContent: "center" , display: "flex"}}> 
      <img width="100%" height="100%"  src={require('./footer.jpg')}  />
    </div>  
  )
}

export default Footer;