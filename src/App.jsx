import Nav from "./components/Nav";
import Homes from "./pages/Homescreen/Homes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductMain from "./pages/Product/ProductMain";

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/product" element={<ProductMain />} />
      </Routes>
    </main>
  </Router>
);

export default App;
