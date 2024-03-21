import "./App.css";
import NavbarSection from "./compoments/navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./compoments/pages/product";
import { Shop } from "./compoments/pages/shop";
import { Login } from "./compoments/pages/login";
import { ProductCat } from "./compoments/pages/productcat";

function App() {
  
  return (
    <BrowserRouter>
      <NavbarSection />
      <Routes>
        <Route path="/" element={<Product/>}/>
          <Route path="men" element={<Shop/>} />
          <Route path="womens" element={<Product />} />
          <Route path="kids" element={<ProductCat />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
