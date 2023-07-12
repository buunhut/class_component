import React, { Component } from "react";
import DemoState from "./DemoState";
import DemoDuyetMang from "./DemoDuyetMang";

export default class TrangChu extends Component {
  render() {
    return (
      <div className="container">
        <div id="myBody">TrangChu</div>
        <DemoState />
        {/* <DemoDuyetMang /> */}
      </div>
    );
  }
}
