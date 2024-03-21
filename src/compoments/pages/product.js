import React from "react";

export const Product = () => {
  // const [formdata, setformData] = React.useState({
  //   name: "",
  //   email: "",
  //   number: "",
  //   city: "",
  // });
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [city, setcity] = React.useState("");

  // const OnChangeValue = (e) => {
  //   const { name, value } = e.target;
  //   setformData({
  //     ...formdata,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("localhost:5200/employe/addEmp", {
      method: "POST",
      mode: "no-cors",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_API_URL,
        "Access-Control-Request-Headers": 'Content-Type, Authorization'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        city: city,
        number: number,
      }),
    })
      .then((rep) => rep.json())
      .then((data) => {
        console.log(data);
        setcity("");
        setemail("");
        setname("");
        setnumber("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ margin: 20 }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">Name:</label>
        <input
          type="text"
          placeholder="Enter Name"
          id="usernameInput"
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="Email">Email:</label>

        <input
          type="email"
          placeholder="Enter Email"
          id="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="Number">Number:</label>

        <input
          type="text"
          placeholder="Enter Number"
          id="Number"
          onChange={(e) => setnumber(e.target.value)}
        />
        <label htmlFor="cty">City:</label>

        <input
          type="text"
          placeholder="Enter city"
          id="city"
          onChange={(e) => setcity(e.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};
