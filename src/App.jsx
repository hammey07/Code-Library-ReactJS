import AppLayout from "./Components/AppLayout";
import { BrowserRouter, Link, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<AppLayout />} />
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
