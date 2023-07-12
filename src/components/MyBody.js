import React, { Component } from "react";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import { Outlet } from "react-router-dom";

export default class MyBody extends Component {
  render() {
    return (
      <>
        <MyHeader />

        <Outlet />

        <MyFooter />
      </>
    );
  }
}
