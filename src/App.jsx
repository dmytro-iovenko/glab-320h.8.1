import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/currencies" element={<Currencies />} />
      <Route path="/price" element={<Price />} />
    </Routes>
  );
}

export default App;
