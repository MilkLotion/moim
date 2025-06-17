import { Routes, Route } from "react-router-dom";

import { Sidebar } from "@layouts/sidebar";
import AdminPage from "./pages/main/index";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="body_background">
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/club/@:clubId" element={<AdminPage />} />
          <Route path="/clubs" element={<AdminPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
