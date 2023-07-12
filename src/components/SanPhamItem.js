import React, { Component } from "react";

export default class SanPhamItem extends Component {
  state = {
    sanPham: this.props.sanPham,
  };
  xemChiTiet = (ma) => {
    alert(ma);
  };
  render() {
    let { sanPham } = this.props;
    console.log(sanPham);

    return (
      <div style={{ width: "300px" }}>
        <span>Mã: {sanPham.ma}</span>
        <h3>Tên: {sanPham.ten}</h3>
        <p>Giá: {sanPham.gia}</p>
        <button type="button" onClick={() => this.xemChiTiet(sanPham.ma)}>
          Xem chi tiết
        </button>
      </div>
    );
  }
}
