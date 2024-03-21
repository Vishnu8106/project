import React, { useEffect, useState } from "react";

export const ProductCat = () => {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vishnu = await fetch("localhost:5200/employe/getemploye");
    const result = await vishnu.json();
    console.log(result);
  };
  
  useEffect(()=>{
    fetch('http://localhost:5200/employe/getemploye',{ mode:  'no-cors' })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // Do something with the data
    })
    .catch(error => {
      console.log(error)
    });

  },[])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

