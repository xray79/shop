import Home from "./components/Home/Home.component";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
