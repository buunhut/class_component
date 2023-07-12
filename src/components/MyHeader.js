import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class MyHeader extends Component {
  state = {
    display: false,
  };
  handleGioHang = () => {
    console.log(this.props.gioHang);
    this.setState({
      display: !this.state.display,
    });
  };
  render() {
    let myShow = "";
    this.state.display ? (myShow = "block") : (myShow = "none");
    let tongTien = 0;
    return (
      <>
        <div id="myHeader">
          <div>
            <ul>
              <li>
                <NavLink to="" className="myLink">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/sanpham" className="myLink">
                  Sản phẩm
                </NavLink>
              </li>
              <li>
                <NavLink to="/tintuc" className="myLink">
                  Tin tức
                </NavLink>
              </li>
              <li>
                <NavLink to="/lienhe" className="myLink">
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="gioHang"
              onClick={this.handleGioHang}
            >
              Giỏ hàng ({this.props.gioHang.length})
            </button>
          </div>
        </div>
        <div id="gioHang" style={{ display: `${myShow}` }}>
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Giá</th>
                <th>SL</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {this.props.gioHang.map((item, index) => {
                let { ten, gia, soLuong } = item;
                tongTien += gia * soLuong;
                return (
                  <tr key={index}>
                    <td>{ten}</td>
                    <td>{gia}</td>
                    <td>{soLuong}</td>
                    <td>{gia * soLuong}</td>
                  </tr>
                );
              })}
              <tr>
                <th colSpan={3}>Tổng tiền</th>
                <th>{tongTien}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
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
export default connect(mapStateToProps)(MyHeader);
