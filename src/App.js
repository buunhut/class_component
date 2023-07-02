import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import MyTop from "./components/MyTop";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";
import ThemeUser from "./components/ThemeUser";
import LienHe from "./components/LienHe";
import TinTuc from "./components/TinTuc";
import SanPham from "./components/SanPham";
import ChiTiet from "./components/ChiTiet";
import Child from "./components/Child";

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
            <Route index element={<MyMain />} />
            <Route path="sanpham" element={<SanPham />}>
              <Route path=":id" element={<Child />} />
            </Route>
            <Route path="chitiet" element={<ChiTiet />} />
            <Route path="lienhe" element={<LienHe />} />
            <Route path="tintuc" element={<TinTuc />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
