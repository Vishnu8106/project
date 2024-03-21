import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

const middledata = [
  { id: 1, Name: "Shop",navigate:"men" },
  { id: 2, Name: "Men" ,navigate:"womens" },
  { id: 3, Name: "Women",navigate:'kids'},
  { id: 4, Name: "Kids" },
];

const NavbarSection = () => {
  const navigate = useNavigate();
  const [number, setnumber] = React.useState(1);
  return (
    <div>
      <div className="main-Section ">
        <div className="left-nav ">
          <img src=""/>
          <h3>E-comm</h3>
        </div>
        <div className="middle-nav ">
          {middledata.map((e) => {
            return (
              <div className="middle-nav" key={e.id}>
                <button
                  className={
                    number !== e.id ? "middle-nav btn-style" : "header-btn"
                  }
                  onClick={() => {
                    navigate(`/${e.navigate}`,setnumber(e.id));
                  }}
                >
                  {e.Name}
                </button>
              </div>
            );
          })}
        </div>
        <div className="right-nav ">
         <button className="loginbtn" onClick={()=>navigate('/login')}>Login</button>
         

          <LuShoppingCart size={30} />
          <div className="cart-count">0</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavbarSection;
