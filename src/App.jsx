import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homes from "./pages/Homescreen/Homes";
import ProductMain from "./pages/Product/ProductMain";

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="products" element={<ProductMain />} />
      </Routes>
    </main>
  </Router>
);

export default App;
