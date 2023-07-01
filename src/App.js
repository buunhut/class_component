import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTop from "./components/MyTop";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";
import ThemeUser from "./components/ThemeUser";
import LienHe from "./components/LienHe";
import TinTuc from "./components/TinTuc";
import SanPham from "./components/SanPham";
import ChiTiet from "./components/ChiTiet";

function App() {
  return (
    <div className="container">
      {/* <h1>Hello Chịa</h1>
      <MyTop />
      <MyMain />
      <MyFooter /> */}

      <BrowserRouter>
        <Routes>
          <Route path="" element={<ThemeUser />}>
            <Route path="" element={<MyMain />} />
            <Route path="sanpham" element={<SanPham />} />
            <Route path="sanpham/chitiet" element={<ChiTiet />} />
            <Route path="lienhe" element={<LienHe />} />
            <Route path="tintuc" element={<TinTuc />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
