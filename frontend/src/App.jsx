import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import { CartProvider } from "./contexts/CartContext";
import { LoginProvider } from "./contexts/LoginContext";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <div className="App">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
