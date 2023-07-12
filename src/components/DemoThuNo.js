import React, { Component } from "react";

export default class DemoThuNo extends Component {
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
  //gọi componentDidMount để update giá trị cho listRender vì mọi dữ liệu đều từ listRender chạy ra
  //listRender chỉ lấy ra những khachHangNo
  componentDidMount() {
    if (this.state.listRender.length === 0) {
      let { arrPhieu, count, total, checkAll } = this.state;
      let khachHangNo = arrPhieu
        .filter((item) => {
          return item.soTien - item.thanhToan > 0; // lấy ra khách hàng nợ
        })
        .map((item) => {
          let { soTien, thanhToan } = item;
          let tienNo = soTien - thanhToan;
          count += 1;
          total += tienNo;
          return { ...item, tienNo, isChecked: checkAll };
        });

      //console.log(khachHangNo);
      //setState cho listRender giá trị khachHangNo mình vừa lấy được
      this.setState({
        ...this.state,
        listRender: khachHangNo,
        count: count,
        total: total,
      });
    }
  }
  handleChonKhachHang = (event) => {
    let count = 0;
    let total = 0;
    let selectedName = event.target.value;
    let { arrPhieu, checkAll } = this.state;
    let listSelectedName = [];
    //khi chọn tên khách hàng, hiển thị đúng tên khách hàng đã chọn
    if (selectedName !== "") {
      listSelectedName = arrPhieu
        .filter((item) => {
          return (
            item.khachHang === selectedName && item.soTien - item.thanhToan > 0
          );
        })
        .map((item) => {
          let tienNo = item.soTien - item.thanhToan;
          count += 1;
          total += tienNo;
          return { ...item, tienNo, isChecked: true };
        });
    } else {
      // không chọn tên khách hàng, hiển thị tất cả khách hàng nợ
      listSelectedName = arrPhieu
        .filter((item) => {
          return item.soTien - item.thanhToan > 0;
        })
        .map((item) => {
          let tienNo = item.soTien - item.thanhToan;
          count += 1;
          total += tienNo;
          return { ...item, tienNo, isChecked: true };
        });
    }
    //setState để render lại
    this.setState({
      ...this.state,
      listRender: listSelectedName,
      selectedName,
      total,
      count,
      checkAll: true,
    });
  };
  handleCheckAll = (event) => {
    let { arrPhieu, selectedName, checkAll } = this.state;
    let listRender = [];
    let count = 0;
    let total = 0;
    if (event.target.checked) {
      //chekc all
      //kiểm tra xem có chọn tên khách hàng hay ko
      if (selectedName !== "") {
        //code checkall, có chọn tên khách hàng
        listRender = arrPhieu
          .filter((item) => {
            return (
              item.khachHang === selectedName &&
              item.soTien - item.thanhToan > 0
            );
          })
          .map((item) => {
            let { soTien, thanhToan } = item;
            let tienNo = soTien - thanhToan;
            if (tienNo > 0) {
              count += 1;
              total += tienNo;
            }
            return { ...item, tienNo, isChecked: !checkAll };
          });
        // console.log(listRender);
      } else {
        //code checkall, không chọn tên khách hàng
        listRender = arrPhieu
          .filter((item) => {
            return item.soTien - item.thanhToan > 0;
          })
          .map((item) => {
            let tienNo = item.soTien - item.thanhToan;
            count += 1;
            total += tienNo;
            return { ...item, tienNo, isChecked: !checkAll };
          });
        // listRender = arrPhieu
        //   .map((item) => {
        //     let { soTien, thanhToan } = item;
        //     let tienNo = soTien - thanhToan;
        //     return { ...item, tienNo, isChecked: !checkAll };
        //   })
        //   .filter((item) => {
        //     if (item.tienNo > 0) {
        //       count += 1;
        //       total += item.tienNo;
        //     }
        //     return item.tienNo > 0;
        //   });
      }
    } else {
      //uncheck all
      //kiểm tra xem có chọn tên khách hàng hay ko
      if (selectedName !== "") {
        //code uncheckall, có chọn tên khách hàng
        listRender = arrPhieu
          .filter((item) => {
            return (
              item.khachHang === selectedName &&
              item.soTien - item.thanhToan > 0
            );
          })
          .map((item) => {
            let { soTien, thanhToan } = item;
            let tienNo = soTien - thanhToan;
            return { ...item, tienNo, isChecked: !checkAll };
          });
      } else {
        //code uncheckall, không chọn tên khách hàng
        listRender = arrPhieu
          .filter((item) => {
            return item.soTien - item.thanhToan > 0;
          })
          .map((item) => {
            let tienNo = item.soTien - item.thanhToan;
            return { ...item, tienNo, isChecked: !checkAll };
          });
        // listRender = arrPhieu
        //   .map((item) => {
        //     let { soTien, thanhToan } = item;
        //     let tienNo = soTien - thanhToan;
        //     return { ...item, tienNo, isChecked: !checkAll };
        //   })
        //   .filter((item) => {
        //     return item.tienNo > 0;
        //   });
      }
    }
    this.setState({
      ...this.state,
      listRender,
      count,
      total,
      checkAll: !this.state.checkAll,
    });
  };
  handleCheckList = (event) => {
    let soPhieu = event.target.value;
    let isChecked = event.target.checked;
    let { arrPhieu, listRender } = this.state;
    let total = 0;
    let count = 0;

    //tìm soPhieu set lại giá trị của isChecked
    let updatedListRender = listRender.map((item) => {
      if (item.soPhieu == soPhieu) {
        return { ...item, isChecked };
      }
      return item;
    });
    //đếm trong updateListRender có bao nhiêu phần tử được check
    // const count = updatedListRender.filter((item) => item.isChecked).length;
    updatedListRender.map((item) => {
      if (item.isChecked) {
        count += 1;
        total += item.tienNo;
      }
    });

    //set lại checkAll, kiểm tra xem count có bằng độ dài của updatedListRender không?
    // gáng giá trị true false cho checkAll
    let checkAll = count === updatedListRender.length; //câu lệnh này rất thâm túy

    this.setState({
      ...this.state,
      listRender: updatedListRender,
      count,
      total,
      checkAll,
    });
  };
  handleThuPhieuDaChon = () => {
    alert();
  };

  render() {
    //chỉ lấy tên khách hàng nợ và lọc bỏ những tên trùng lặp bằng ...new Set([])
    let listSelectName = [
      ...new Set(
        this.state.arrPhieu
          .filter((phieu) => {
            return phieu.soTien - phieu.thanhToan > 0;
          })
          .map((phieu) => {
            return phieu.khachHang;
          })
      ),
    ];
    let checkAll = this.state.checkAll;
    // console.log(this.state, this.state.selectedName);
    return (
      <div className="container">
        <div id="congNo">
          <div>
            <h1> Demo Thu Nợ </h1>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ width: "25%" }}>
                <select
                  style={{ width: "100%", height: "28px" }}
                  onChange={this.handleChonKhachHang}
                >
                  <option value="">Tất cả khách hàng</option>
                  {listSelectName.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div style={{ width: "25%", textAlign: "center" }}>
                <button
                  type="button"
                  onClick={this.handleThuPhieuDaChon}
                  hidden={
                    this.state.total === 0 || this.state.selectedName === ""
                  }
                  style={{
                    height: "28px",
                    width: "130px",
                    backgroundColor: "orangered",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Thu phiếu đã chọn
                </button>
              </div>
              <div style={{ width: "25%" }}>
                <p
                  style={{ textAlign: "right" }}
                  hidden={this.state.count === 0}
                >
                  Đã chọn: {this.state.count} phiếu
                </p>
              </div>
              <div style={{ width: "25%" }}>
                <p
                  style={{ textAlign: "right" }}
                  hidden={this.state.total === 0}
                >
                  Tổng tiền: {this.state.total.toLocaleString()}đ
                </p>
              </div>
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
                  <th>#SP</th>
                  <th>Ngày</th>
                  <th>Tên khách hàng</th>
                  <th style={{ textAlign: "right" }}>Số tiền</th>
                  <th style={{ textAlign: "right" }}>Thanh toán</th>
                  <th style={{ textAlign: "right" }}>Còn Nợ</th>
                </tr>
              </thead>
              <tbody>
                {this.state.listRender?.map((item, index) => {
                  let {
                    soPhieu,
                    ngay,
                    khachHang,
                    soTien,
                    thanhToan,
                    tienNo,
                    isChecked,
                  } = item;
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          value={soPhieu}
                          checked={isChecked}
                          onChange={this.handleCheckList}
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
                        {tienNo.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
