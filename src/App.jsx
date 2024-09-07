import Nav from "./components/Nav";
import Homes from "./pages/Homescreen/Homes";

import { BrowserRouter as Routes, Route } from "react-router-dom";

const App = () => (

  <Route>
    <main className="relative">
    <Nav />
    <Homes/>
  </main>
  </Route>
  
);

export default App;
