import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
// import ProductSearch from "./components/products-search/ProductSearch";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Shop />} />
          <Route path="ideas" element={"ideas"} />
          <Route path="visit" element={"visit"} />
        </Route>
      </Routes>
      <Footer />
        </>
  );
}

export default App;
