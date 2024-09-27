import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homes from "./pages/Homescreen/Homes";
import ProductMain from "./pages/Product/ProductMain";
import useDarkMode from "./hooks/useDarkMode";
import { useState } from "react";

const App = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <Router>
      <main className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Nav  />
        
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="products" element={<ProductMain />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
