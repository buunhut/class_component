import React, { Component } from "react";

export default class DemoDuyetPhieu extends Component {
  state = {
    arrPhieu: [
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
    ],
    arrPhieuDaChon: [],
    soLuongPhieuDaChon: 0,
    tongTienNoPhieuDaChon: 0,
    checkAll: false,
    checkList: false,
    chonKhachNo: "",
  };

  handleCheck = (event) => {
    event.target.checked
      ? this.setState({
          ...this.state,
          soLuongPhieuDaChon: this.state.soLuongPhieuDaChon + 1,
          tongTienNoPhieuDaChon:
            this.state.tongTienNoPhieuDaChon + Number(event.target.value),
        })
      : this.setState({
          ...this.state,
          soLuongPhieuDaChon: this.state.soLuongPhieuDaChon - 1,
          tongTienNoPhieuDaChon:
            this.state.tongTienNoPhieuDaChon - Number(event.target.value),
        });
  };
  handleCheckAll = (event) => {
    event.target.checked
      ? this.setState({
          ...this.state,
          checkAll: !this.state.checkAll,
          checkList: true,
        })
      : this.setState({
          ...this.state,
          checkAll: !this.state.checkAll,
          checkList: false,
        });
  };
  handleChonKhachNo = (event) => {
    const chonKhachNo = event.target.value;
    this.setState({
      ...this.state,
      chonKhachNo,
    });
  };
  render() {
    console.log(this.state.chonKhachNo);
    const checkAll = this.state.checkAll;
    const checkList = this.state.checkList;
    let arrPhieu = [...this.state.arrPhieu];

    let phieuNo = [];
    let soLuongPhieuNo = 0;
    let tongTienNo = 0;

    if (this.state.chonKhachNo === "") {
      arrPhieu.map((item) => {
        if (item.soTien - item.thanhToan > 0) {
          soLuongPhieuNo += 1;
          tongTienNo += item.soTien - item.thanhToan;
          phieuNo.push(item);
        }
      });
    } else {
      arrPhieu.map((item) => {
        if (
          item.soTien - item.thanhToan > 0 &&
          item.khachHang === this.state.chonKhachNo
        ) {
          soLuongPhieuNo += 1;
          tongTienNo += item.soTien - item.thanhToan;
          phieuNo.push(item);
        }
      });
    }

    //chỉ lấy khách hàng nợ,
    let arrKhachHangNo = [];
    arrPhieu.map((item) => {
      if (item.soTien - item.thanhToan > 0) {
        soLuongPhieuNo += 1;
        tongTienNo += item.soTien - item.thanhToan;
        arrKhachHangNo.push(item);
      }
    });
    //loại bỏ khách hàng trùng tên
    let arrLocKhachNo = [
      ...new Set(arrKhachHangNo.map((phieu) => phieu.khachHang)),
    ];

    return (
      <div className="container">
        <h1>Demo Duyệt Phiếu</h1>
        <div style={{ width: "600px" }}>
          <div>
            <select id="listKhachNo" onChange={this.handleChonKhachNo}>
              <option value="">Tất cả khách hàng</option>
              {arrLocKhachNo.map((khachHangNo, index) => {
                return (
                  <option value={khachHangNo} key={index}>
                    {khachHangNo}
                  </option>
                );
              })}
            </select>
            {/* <select
              id="listKhachNo"
              placeholder="Chọn khách hàng"
              
            >
              
            </select> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px; 0",
              marginTop: "10px",
            }}
          >
            <p>
              {this.state.soLuongPhieuDaChon !== 0
                ? `Đã chọn: ${this.state.soLuongPhieuDaChon} phiếu`
                : ""}
            </p>
            <p>
              {this.state.tongTienNoPhieuDaChon !== 0
                ? `Tổng tiền: ${this.state.tongTienNoPhieuDaChon.toLocaleString()}`
                : ""}
            </p>
          </div>
          <table id="myTable">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" onClick={this.handleCheckAll} />
                </th>
                <th>SP#</th>
                <th>Ngày</th>
                <th>Khách hàng</th>
                <th>Số tiền</th>
                <th>Thanh toán</th>
                <th>Còn nợ</th>
              </tr>
            </thead>
            <tbody>
              {phieuNo.map((phieu, index) => {
                let { soPhieu, ngay, khachHang, soTien, thanhToan } = phieu;
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        value={soTien - thanhToan}
                        onClick={this.handleCheck}
                      />
                    </td>
                    <td>{soPhieu}</td>
                    <td>{ngay}</td>
                    <td>{khachHang}</td>
                    <td style={{ textAlign: "right" }}>
                      {soTien.toLocaleString()}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {thanhToan.toLocaleString()}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {(soTien - thanhToan).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
