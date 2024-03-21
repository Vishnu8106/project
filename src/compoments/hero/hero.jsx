import React, { useEffect } from "react";
import "./hero.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const [data, setdata] = React.useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setdata(json));
    }, []);
    console.log(data);
  return (
    <>
      <div className="hero-main">
        <div>
          <p className="hero-para">NEW ARRIVALS ONLY</p>
          <h1 className="hero-heading" style={{ fontWeight: 700 }}>
            New
            <img
              src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/1f44b.png"
              width={50}
              height={50}
            />{" "}
            <br></br> Collections <br></br>for everyone
          </h1>
          <button className="btn-hero">
            Latest Collection <FaArrowRightLong />
          </button>
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/471/898/non_2x/beautiful-young-asian-woman-with-shopping-bags-file-png.png"
            width={350}
            height={350}
          />
        </div>
      </div>
      <div>
        <div>
          <h3>POPULAR IN WOMEN</h3>
        </div>
        <div className="ithems">
            {data.map((e)=>{
                return(
                    <div >
                        <img src={e.images} width={200} height={200}/>
                        <p>{e.title}</p>
                        </div>
                )
            })}
        </div>
      </div>
    </>
  );
};
export default Hero;
