import React, { Component } from "react";

export default class SanPham extends Component {
  state = {
    arrSanPham: [
      {
        ma: "001",
        ten: "iphone 12",
        gia: 12000,
        mota: "mô tả iphone 12",
      },
      {
        ma: "002",
        ten: "iphone 13",
        gia: 13000,
        mota: "mô tả iphone 13",
      },
      {
        ma: "003",
        ten: "iphone 14",
        gia: 14000,
        mota: "mô tả iphone 14",
      },
      {
        ma: "004",
        ten: "iphone 14",
        gia: 14000,
        mota: "mô tả iphone 14",
      },
      {
        ma: "005",
        ten: "iphone 15",
        gia: 15000,
        mota: "mô tả iphone 15",
      },
      {
        ma: "006",
        ten: "iphone 16",
        gia: 14000,
        mota: "mô tả iphone 16",
      },
      {
        ma: "007",
        ten: "iphone 17",
        gia: 17000,
        mota: "mô tả iphone 17",
      },
      {
        ma: "008",
        ten: "iphone 18",
        gia: 18000,
        mota: "mô tả iphone 18",
      },
      {
        ma: "009",
        ten: "iphone 19",
        gia: 19000,
        mota: "mô tả iphone 19",
      },
      {
        ma: "0010",
        ten: "iphone 20",
        gia: 20000,
        mota: "mô tả iphone 20",
      },
      {
        ma: "0011",
        ten: "iphone 21",
        gia: 21000,
        mota: "mô tả iphone 21",
      },
      {
        ma: "0012",
        ten: "iphone 22",
        gia: 22000,
        mota: "mô tả iphone 22",
      },
      {
        ma: "0013",
        ten: "iphone 23",
        gia: 23000,
        mota: "mô tả iphone 23",
      },
      {
        ma: "0014",
        ten: "iphone 24",
        gia: 24000,
        mota: "mô tả iphone 24",
      },
      {
        ma: "0015",
        ten: "iphone 25",
        gia: 25000,
        mota: "mô tả iphone 25",
      },
      {
        ma: "0016",
        ten: "iphone 26",
        gia: 26000,
        mota: "mô tả iphone 26",
      },
    ],
    chiTiet: {
      ma: "",
      ten: "",
      gia: "",
      mota: "",
    },
    modal: "none",
  };
  oldScrollPosition = 0;
  xemChiChiTiet = (item) => {
    this.oldScrollPosition = window.scrollY;
    this.setState({
      chiTiet: item,
      modal: "block",
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.chiTiet !== nextState) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    let allSanPham = [...this.state.arrSanPham];
    let modal = this.state.modal;
    let chiTiet = { ...this.state.chiTiet };

    return (
      <div id="sanPham">
        {allSanPham.map((item, index) => {
          let { ma, ten, gia, mota } = item;
          return (
            <div
              className="item"
              key={index}
              onClick={() => this.xemChiChiTiet(item)}
            >
              <h1>{ten}</h1>
              <h2>{gia}</h2>
            </div>
          );
        })}
        {/* model */}
        <div id="modal" style={{ display: modal }}>
          <button
            onClick={() => {
              this.setState({
                modal: "none",
              });
              window.scrollTo({
                top: this.oldScrollPosition,
                behavior: "smooth",
              });
            }}
          >
            close
          </button>
          <h1>chi tiết sản phẩm</h1>
          <div>
            <p>{chiTiet.ma}</p>
            <h1>{chiTiet.ten}</h1>
            <p>{chiTiet.gia}</p>
            <span>{chiTiet.mota}</span>
          </div>
        </div>
      </div>
    );
  }
}
