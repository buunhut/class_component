import React, { Component } from "react";
export default class ADongDemoNo extends Component {
  arrPhieu = [
    {
      soPhieu: 1,
      ngay: "12/10/2023",
      khachHang: "phát đạt 100",
      soTien: 1000000,
      thanhToan: 500000,
    },
    {
      soPhieu: 2,
      ngay: "12/10/2023",
      khachHang: "đức anh",
      soTien: 1200000,
      thanhToan: 1200000,
    },
    {
      soPhieu: 3,
      ngay: "15/10/2023",
      khachHang: "liên tín",
      soTien: 8000000,
      thanhToan: 8000000,
    },
    {
      soPhieu: 4,
      ngay: "16/10/2023",
      khachHang: "liên tín",
      soTien: 8000000,
      thanhToan: 8000000,
    },
    {
      soPhieu: 5,
      ngay: "18/10/2023",
      khachHang: "a xuân",
      soTien: 18000000,
      thanhToan: 8000000,
    },
    {
      soPhieu: 6,
      ngay: "19/10/2023",
      khachHang: "phát đạt 140",
      soTien: 5800000,
      thanhToan: 0,
    },
    {
      soPhieu: 7,
      ngay: "21/10/2023",
      khachHang: "tấn phát",
      soTien: 500000,
      thanhToan: 0,
    },
    {
      soPhieu: 8,
      ngay: "22/10/2023",
      khachHang: "liên tín",
      soTien: 18000000,
      thanhToan: 8000000,
    },
    {
      soPhieu: 9,
      ngay: "22/10/2023",
      khachHang: "tấn phát",
      soTien: 1500000,
      thanhToan: 0,
    },
    {
      soPhieu: 10,
      ngay: "22/10/2023",
      khachHang: "phát đạt 140",
      soTien: 2300000,
      thanhToan: 0,
    },
    {
      soPhieu: 11,
      ngay: "24/10/2023",
      khachHang: "phát đạt 100",
      soTien: 14000000,
      thanhToan: 500000,
    },
    {
      soPhieu: 12,
      ngay: "24/10/2023",
      khachHang: "tấn phát",
      soTien: 9200000,
      thanhToan: 0,
    },
    {
      soPhieu: 13,
      ngay: "24/10/2023",
      khachHang: "phong vũ",
      soTien: 8600000,
      thanhToan: 0,
    },
    {
      soPhieu: 14,
      ngay: "25/10/2023",
      khachHang: "phát đạt 140",
      soTien: 2600000,
      thanhToan: 0,
    },
    {
      soPhieu: 15,
      ngay: "25/10/2023",
      khachHang: "phát đạt 100",
      soTien: 2900000,
      thanhToan: 0,
    },
    {
      soPhieu: 16,
      ngay: "25/10/2023",
      khachHang: "liên tín",
      soTien: 9600000,
      thanhToan: 0,
    },
    {
      soPhieu: 17,
      ngay: "25/10/2023",
      khachHang: "liên tín",
      soTien: 3600000,
      thanhToan: 0,
    },
    {
      soPhieu: 18,
      ngay: "26/10/2023",
      khachHang: "phát đạt 100",
      soTien: 8600000,
      thanhToan: 0,
    },
  ].map((item) => ({ ...item, isChecked: false }));
  state = {
    arrPhieu: this.arrPhieu,
    checkedItems: [],
  };

  // handle
  handleCheckAllChange = (event) => {
    let { checked } = event.target;

    this.setState((prevState) => ({
      arrPhieu: prevState.arrPhieu.map((item) => ({
        ...item,
        isChecked: checked,
      })),
    }));
  };
  handleShowInfo = (event) => {
    let { value } = event.target;
    switch (value) {
      case "Nợ": {
        this.setState({
          ...this.state,
          arrPhieu: this.state.arrPhieu.filter(
            (item) => item.thanhToan < item.soTien
          ),
        });
        break;
      }

      case "All": {
        this.setState({
          ...this.state,
          arrPhieu: this.arrPhieu,
        });
        break;
      }

      default:
        break;
    }
  };
  handleInputChange = (event, item, index) => {
    let { checked } = event.target;
    let clonePhieu = [...this.state.arrPhieu];
    let cloneCheckedItem = [...this.state.checkedItems];

    if (!cloneCheckedItem.includes(item)) {
      cloneCheckedItem = [...cloneCheckedItem, item];
    } else {
      cloneCheckedItem = cloneCheckedItem.filter(
        (checked) => checked.soPhieu !== item.soPhieu
      );
    }
    clonePhieu[index].isChecked = checked;
    this.setState({
      ...this.state,
      arrPhieu: clonePhieu,
      checkedItems: cloneCheckedItem,
    });
  };
  //layout
  render() {
    let { arrPhieu, checkedItems } = this.state;
    console.log("checkedItems: ", checkedItems);
    console.log("arrPhieu: ", arrPhieu);
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <select onChange={this.handleShowInfo} defaultValue="All">
            <option value="All">Xem tất cả</option>
            <option value="Nợ">Nợ</option>
          </select>
          <table cellPadding={10} border={3}>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) => this.handleCheckAllChange(e)}
                    checked={this.state.arrPhieu.every(
                      (item) => item.isChecked == true
                    )}
                  />
                </th>
                <th>ID</th>
                <th>Ngày</th>
                <th>Khách hàng</th>
                <th>Số tiền</th>
                <th>Thanh toán</th>
              </tr>
            </thead>
            <tbody>
              {arrPhieu.map((item, index) => {
                let { soPhieu, ngay, khachHang, soTien, thanhToan } = item;
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={(event) =>
                          this.handleInputChange(event, item, index)
                        }
                        checked={item.isChecked}
                      />
                    </td>
                    <td>{soPhieu}</td>
                    <td>{ngay}</td>
                    <td>{khachHang}</td>
                    <td>{soTien}</td>
                    <td>{thanhToan}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <table style={{ width: "50%", display: "inline" }} cellPadding={10}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ngày</th>
              <th>Khách hàng</th>
              <th>Số tiền</th>
              <th>Thanh toán</th>
            </tr>
          </thead>
          <tbody>
            {this.state.checkedItems.map((item, key) => {
              let { soPhieu, ngay, khachHang, soTien, thanhToan } = item;
              return (
                <tr key={key}>
                  <td>{soPhieu}</td>
                  <td>{ngay}</td>
                  <td>{khachHang}</td>
                  <td>{soTien}</td>
                  <td>{thanhToan}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
