import React, { Component } from "react";

export default class DemoState extends Component {
  //state là object
  state = {
    chiaOi: "hello chịa",
    soLuong: 10,
    display: true,
    hinh: "",
    listHocSinh: [
      {
        ma: "001",
        ten: "bé tiger",
        lop: "mẫu giáo",
      },
      {
        ma: "002",
        ten: "bé ngọc hân",
        lop: "5a",
      },
      {
        ma: "003",
        ten: "bé kiết tường",
        lop: "3a",
      },
    ],
  };
  handleTang = () => {
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };

  handleGiam = () => {
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };

  xoaHocSinh = (ma) => {
    let listHocSinhMoi = [...this.state.listHocSinh];
    let viTri = listHocSinhMoi.findIndex((item) => item.ma === ma);
    listHocSinhMoi.splice(viTri, 1);
    this.setState({
      listHocSinh: listHocSinhMoi,
    });
  };

  render() {
    let listHocSinh = [...this.state.listHocSinh];
    console.log(listHocSinh);
    return (
      <div>
        <div>
          <h1>Danh sach</h1>
          <table>
            <thead>
              <tr>
                <th>Mã</th>
                <th>Tên</th>
                <th>Lớp</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {listHocSinh.map((item, index) => {
                let { ma, ten: name, lop } = item;
                return (
                  <tr key={index}>
                    <td>{ma}</td>
                    <td>{name}</td>
                    <td>{lop}</td>
                    <td>
                      <button type="button" onClick={() => this.xoaHocSinh(ma)}>
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h1 style={{ display: this.state.display ? "none" : "block" }}>
          Học về state
        </h1>

        <button
          onClick={() => {
            this.setState({
              display: !this.state.display,
            });
          }}
        >
          {this.state.display ? "Hiên h1" : "Ẩn h1"}
        </button>

        {/* 2 dấu {} để gọi dữ liệu là biến*/}
        <p>{this.state.chiaOi}</p>

        <button
          type="button"
          onClick={() => {
            this.setState({
              chiaOi: "hello bé tiger",
            });
          }}
        >
          click tôi đi
        </button>
        <br></br>
        <button type="button" onClick={this.handleGiam}>
          Giảm số lượng xuống 1
        </button>

        <h1>Số lượng: {this.state.soLuong}</h1>

        <button type="button" onClick={this.handleTang}>
          Tăng số lượng lên 1
        </button>
        <div>
          <img src={this.state.hinh} />
          <button
            type="button"
            onClick={() => {
              this.setState({
                hinh: "",
              });
            }}
          >
            Đôi hình
          </button>
        </div>
        <div>
          <h1>Danh sách ghế</h1>
        </div>
      </div>
    );
  }
}
