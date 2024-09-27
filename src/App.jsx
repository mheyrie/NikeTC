import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homes from "./pages/Homescreen/Homes";
import ProductMain from "./pages/Product/ProductMain";
import useDarkMode from "./hooks/useDarkMode";

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      <button className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        Toggle{colorTheme === "dark" ? "Light" : "Dark"} Mode
      </button>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="products" element={<ProductMain />} />
      </Routes>
    </main>
  </Router>
);

export default App;
