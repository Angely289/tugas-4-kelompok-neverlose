import { Routes, Route } from "react-router-dom";
import ListPet from "./pages/ListPet";
import Anjing from "./pages/Anjing";
import Kucing from "./pages/Kucing";
import Burung from "./pages/Burung";
import HewanMungil from "./pages/HewanMungil";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<ListPet />} />
        <Route path="/anjing" element={<Anjing />} />
        <Route path="/kucing" element={<Kucing />} />
        <Route path="/burung" element={<Burung />} />
        <Route path="/hewan_mungil" element={<HewanMungil />} />
        <Route path="/pet/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
