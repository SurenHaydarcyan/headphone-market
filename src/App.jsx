import { Route, Routes } from "react-router-dom";
import HomeWraper from "./HomeWraper/HomeWraper";
import AboutUs from "./Pages/AboutUs";
import Market from "./Pages/Market";
import HomePage from "./Pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./components/NotFoundPage";




const App = () => {
 

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeWraper />}>
          <Route index element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/market" element={<Market />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>


        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </>
  );
};

export default App;
