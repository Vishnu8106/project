import React, { useEffect } from "react";
import Hero from "../hero/hero";

export const Shop = () => {
const[data,setdata]=React.useState([])
// useEffect(()=>{
    
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json => setdata(json.products))

// },[])
// console.log(data)

  return (
    <div>
      {/* <h1>Shop</h1>
      {data.map((e)=>{
        return(
            <div>
                <h1>{e.title}</h1>
                <img src={e.images}/>
                </div>
        )
      })} */}
      <Hero/>
    </div>
  );
};
