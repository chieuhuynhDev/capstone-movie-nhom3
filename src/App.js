import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./template/Layout";
import HomePage from "./page/HomePage/HomePage";
import DetailPage from "./page/DetailPage/DetailPage";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
