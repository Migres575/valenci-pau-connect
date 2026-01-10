import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* la resta de rutes */}
      </Routes>
    </HashRouter>
  );
}
