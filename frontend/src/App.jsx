import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function App() {
  const [appToken, setAppToken] = useState("");

  return (
    <AppContext.Provider value={{ appToken, setAppToken }}>
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}

export default App;
