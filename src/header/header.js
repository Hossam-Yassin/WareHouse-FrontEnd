import ReactDOM from "react-dom";

function Header({productInfo}) {
  return (
    <div style={{alignItems: "center" , justifyContent: "center" , display: "flex"}}> 
      <img width="100%" height="100%"  src={require('./header.jpg')}  />
    </div>  
  )
}

export default Header;