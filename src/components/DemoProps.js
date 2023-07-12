import React, { Component } from "react";

export default class DemoProps extends Component {
  render() {
    console.log(this.props);
    let ten = this.props.ten;

    return (
      <div>
        <p>DemoProps</p>
        <h1>{ten}</h1>
        <button type="button" onClick={this.props.doiTen}>
          Đổi tên
        </button>
        {this.props.sanPham.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.ma}</p>
              <p>{item.ten}</p>
              <p>{item.gia}</p>
              <hr></hr>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }
}
