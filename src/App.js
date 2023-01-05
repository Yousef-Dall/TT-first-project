// import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/sign up";
import { Route, Routes } from "react-router-dom";
import Games from "./pages/game/game";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
}

export default App;
