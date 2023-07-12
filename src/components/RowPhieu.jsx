import React, { Component } from "react";

export default class RowPhieu extends Component {
  state = { isChecked: true };
  handleCheck = () => {
    console.log("CHECK");
    this.setState({ isChecked: !this.state.isChecked });
  };
  render() {
    let { soPhieu, ngay, khachHang, soTien, thanhToan, isChecked } =
      this.props.phieu;
    return (
      <tr key={this.props.key}>
        <td>
          <input
            type="checkbox"
            defaultChecked={this.props.isChecked}
            value={soTien - thanhToan}
            onClick={this.handleCheck}
          />
        </td>
        <td>{soPhieu}</td>
        <td>{ngay}</td>
        <td>{khachHang}</td>
        <td style={{ textAlign: "right" }}>{soTien.toLocaleString()}</td>
        <td style={{ textAlign: "right" }}>{thanhToan.toLocaleString()}</td>
        <td style={{ textAlign: "right" }}>
          {(soTien - thanhToan).toLocaleString()}
        </td>
      </tr>
    );
  }
}
