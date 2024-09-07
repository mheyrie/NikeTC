import Nav from "./components/Nav";
import Homes from "./pages/Homescreen/Homes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Homes />} />
      </Routes>
    </main>
  </Router>
);

export default App;
