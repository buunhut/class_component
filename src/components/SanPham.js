import React, { Component } from "react";
import DemoProps from "./DemoProps";
import SanPhamItem from "./SanPhamItem";

export default class SanPham extends Component {
  state = {
    sanPham: [
      {
        ma: "001",
        ten: "iphone 12",
        gia: 12000,
        chiTiet: "sản phẩm iphone 12, của apple",
      },
      {
        ma: "002",
        ten: "iphone 13",
        gia: 13000,
        chiTiet: "sản phẩm iphone 13, của apple",
      },
      {
        ma: "003",
        ten: "iphone 14",
        gia: 14000,
        chiTiet: "sản phẩm iphone 14, của apple",
      },
    ],
    chiaOi: "hello chịa",
  };

  handleDoiTen = () => {
    this.setState({
      ...this.state,
      chiaOi: "Hello tiger",
    });
  };

  render() {
    let listSanPham = [...this.state.sanPham];
    return (
      <div className="container">
        <h1>Sản phẩm</h1>
        {/* <DemoProps sanPham={listSanPham} ten={this.state.chiaOi} doiTen={this.handleDoiTen} /> */}
        <div style={{ display: "flex" }}>
          {listSanPham.map((item, index) => {
            return <SanPhamItem sanPham={item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}
