import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet>hello</Outlet>
    </div>
  );
}

export default App;
