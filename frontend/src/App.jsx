import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import { createContext, useState } from "react";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

export const AppContext = createContext(null);

function App() {
  const [appToken, setAppToken] = useState("");

  return (
    <AppContext.Provider value={{ appToken, setAppToken }}>
      <ShoppingCartProvider value={{}}>
        <div className="App">
          <Navbar />
          <Outlet />
        </div>
      </ShoppingCartProvider>
    </AppContext.Provider>
  );
}

export default App;
