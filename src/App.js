import PersistentDrawerLeft from "./components/Hamburger";
import Task from "./pages/Task";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <PersistentDrawerLeft />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
