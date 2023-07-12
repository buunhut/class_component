import React, { Component } from "react";
import RowPhieu from "./RowPhieu";

export default class DemoDuyetPhieuNo extends Component {
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
    ],
    count: 0,
    total: 0,
    listRender: [],
    selectedName: "",
    checkAll: true,
  };
  handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    const { arrPhieu, selectedName } = this.state;
    let total = 0;

    const khachHangNo = arrPhieu
      .filter((item) => {
        const { soTien, thanhToan } = item;
        const tienNo = soTien - thanhToan;
        total += tienNo;
        return tienNo > 0;
      })
      .map((item) => ({ ...item, isChecked, tienNo: item.tienNo }));

    this.setState({
      checkAll: isChecked,
      listRender:
        selectedName === ""
          ? khachHangNo
          : khachHangNo.filter((item) => item.khachHang === selectedName),
      count: isChecked ? khachHangNo.length : 0,
      total: isChecked ? total : 0,
    });
  };

  handleCheck = (event) => {
    const isChecked = event.target.checked;
    const selectedPhieu = parseInt(event.target.value);
    const { listRender } = this.state;
    let total = 0;

    const updatedListRender = listRender.map((item) => {
      let { soTien, thanhToan } = item;
      let tienNo = soTien - thanhToan;

      if (item.soPhieu === selectedPhieu) {
        return { ...item, isChecked, tienNo };
      }
      return item;
    });

    const count = updatedListRender.filter((item) => item.isChecked).length;
    updatedListRender.map((item) => {
      if (item.isChecked) {
        total += item.tienNo;
      }
    });

    const checkAll = count === updatedListRender.length;

    this.setState({
      listRender: updatedListRender,
      count,
      total,
      checkAll,
    });
  };

  handleSelectName = (event) => {
    const selectedName = event.target.value;
    const { arrPhieu } = this.state;

    const khachHangNo = arrPhieu.filter((item) => {
      const { soTien, thanhToan } = item;
      const tienNo = soTien - thanhToan;
      return tienNo > 0;
    });

    const listRender =
      selectedName === ""
        ? khachHangNo
        : khachHangNo.filter((item) => item.khachHang === selectedName);

    this.setState({
      selectedName,
      listRender,
      count: 0,
      total: 0,
      checkAll: false,
    });
  };

  componentDidMount() {
    const { arrPhieu, checkAll } = this.state;
    let total = 0;

    const khachHangNo = arrPhieu
      .map((item) => {
        let phieu = { ...item, isChecked: checkAll };
        const { soTien, thanhToan } = phieu;
        const tienNo = soTien - thanhToan;
        total += tienNo;
        return { ...phieu, tienNo };
      })
      .filter((phieu) => phieu.tienNo > 0);

    this.setState({
      listRender: khachHangNo,
      count: khachHangNo.length,
      total,
    });
  }

  render() {
    console.log(this.state.listRender);

    const { selectedName, count, total, listRender, checkAll } = this.state;

    return (
      <div className="container">
        <h1>Danh sách khách hàng nợ</h1>
        <div>
          <select onChange={this.handleSelectName}>
            <option value={this.state.selectedName}>Chọn khách hàng</option>
            {[...new Set(listRender.map((item) => item.khachHang))].map(
              (khachHang, index) => {
                return (
                  <option value={khachHang} key={index}>
                    {khachHang}
                  </option>
                );
              }
            )}
          </select>
        </div>
        <div style={{ width: "600px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px; 0",
              marginTop: "10px",
            }}
          >
            <p>{count !== 0 ? `Đã chọn: ${count} phiếu` : ""}</p>
            <p>{total !== 0 ? `Tổng tiền: ${total.toLocaleString()}` : ""}</p>
          </div>

          <table id="myTable">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={checkAll}
                    onChange={this.handleCheckAll}
                  />
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
              {listRender.map((item, index) => {
                const {
                  soPhieu,
                  ngay,
                  khachHang,
                  soTien,
                  thanhToan,
                  isChecked,
                } = item;
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        value={soPhieu}
                        onChange={this.handleCheck}
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
