import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./template/Layout";
import HomePage from "./page/HomePage/HomePage";
import DetailPage from "./page/DetailPage/DetailPage";
import LoginPage from "./page/LoginPage/LoginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout content={<HomePage />} />} />
          <Route
            path="/detail/:id"
            element={<Layout content={<DetailPage />} />}
          />

          {/* login route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
