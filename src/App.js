import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyBody from "./Components/MyBody";
import TrangChu from "./Components/TrangChu";
import SanPham from "./Components/SanPham";
import TinTuc from "./Components/TinTuc";
import LienHe from "./Components/LienHe";
import ChiTietSanPham from "./Components/ChiTietSanPham";
import DemoDuyetPhieu from "./Components/DemoDuyetPhieu";
import DemoDuyetPhieuNo from "./Components/DemoDuyetPhieuNo";
import DemoThuNo from "./Components/DemoThuNo";
import ADongDemoNo from "./Components/ADongDemoNo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyBody />}>
          <Route index element={<TrangChu />} />
          <Route path="chitietsanpham/:id" element={<ChiTietSanPham />} />
          <Route path="sanpham" element={<SanPham />} />
          <Route path="tintuc" element={<TinTuc />} />
          <Route path="lienhe" element={<LienHe />} />
          <Route path="demo" element={<DemoThuNo />} />
          {/* <Route path="demo" element={<ADongDemoNo />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
