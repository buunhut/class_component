import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MyMain from "./MyMain";
import LienHe from "./LienHe";
import TinTuc from "./TinTuc";

export default class ThemeUser extends Component {
  render() {
    return (
      <div className="container">
        <div id="topMenu">
          <ul>
            <li>
              <NavLink to="/" className="menuItem">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="sanpham" className="menuItem">
                Sản phẩm
              </NavLink>
            </li>
            <li>
              <NavLink to="tintuc" className="menuItem">
                Tin Tức
              </NavLink>
            </li>
            <li>
              <NavLink to="lienhe" className="menuItem">
                Liên Hệ
              </NavLink>
            </li>
          </ul>
        </div>

        <Outlet></Outlet>

        <div id="myFooter">
          <h1>Footer, đây là footer nè chịa</h1>
        </div>
      </div>
    );
  }
}
