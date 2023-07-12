import React, { Component } from "react";
import { connect } from "react-redux";

class ChiTietSanPham extends Component {
  render() {
    console.log(this.props.gioHang);
    let arrSanPham = [...this.props.arrSanPham];
    let url = window.location.href.split("/");
    let id = url[url.length - 1];
    let sanPham = arrSanPham.find((item) => item.ma === id);
    if (sanPham) {
      let { ma, ten, gia, mota } = sanPham;
      return (
        <div id="chiTietSanPham">
          <h1>ChiTietSanPham</h1>
          <span>Mã: {ma}</span>
          <h2>Tên: {ten}</h2>
          <h3>Giá: {gia}</h3>
          <p>Chi tiết: {mota}</p>
          <div>
            <button
              type="button"
              onClick={() => {
                let gioHang = [...this.props.gioHang];
                let index = gioHang.findIndex((item) => item.ma === sanPham.ma); //trong ktra trong array có sản phẩm đó hay chưa
                if (index !== -1) {
                  let gioHang = [...this.props.gioHang];
                  let sanPham = {
                    ...gioHang[index],
                    soLuong: gioHang[index].soLuong + 1,
                  };
                  gioHang[index] = { ...sanPham };
                  console.log(sanPham);

                  // push sanPham vào giaHang
                  const action = {
                    type: "themgiohang",
                    gioHang: gioHang,
                  };
                  this.props.dispatch(action);
                } else {
                  sanPham = { ...sanPham, soLuong: 1 };
                  let gioHang = [...this.props.gioHang, sanPham]; // push sanPham vào giaHang
                  const action = {
                    type: "themgiohang",
                    gioHang: gioHang,
                  };
                  this.props.dispatch(action);
                }
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div id="chiTietSanPham">
          <h1> Sản phảm không có</h1>
        </div>
      );
    }
  }
}
// kết nối dữ liệu redux
const mapStateToProps = (state) => {
  return {
    arrSanPham: state.duLieu.arrSanPham,
    gioHang: state.duLieu.gioHang,
    sanPham: state.duLieu.sanPham,
  };
};
const layDuLieuTuRedux = connect(mapStateToProps)(ChiTietSanPham);
export default layDuLieuTuRedux;
