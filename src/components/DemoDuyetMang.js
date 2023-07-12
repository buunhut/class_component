import React, { Component } from "react";

export default class DemoDuyetMang extends Component {
  state = {
    arr: [
      {
        hang: "",
        danhSachGhe: [
          {
            soGhe: "1",
            gia: 70000,
            daDat: false,
          },
          {
            soGhe: "2",
            gia: 70000,
            daDat: false,
          },
          {
            soGhe: "3",
            gia: 70000,
            daDat: false,
          },
          {
            soGhe: "4",
            gia: 70000,
            daDat: false,
          },
          {
            soGhe: "5",
            gia: 70000,
            daDat: false,
          },
        ],
      },
      {
        hang: "A",
        danhSachGhe: [
          {
            soGhe: "A1",
            gia: 70000,
            daDat: false,
          },
          {
            soGhe: "A2",
            gia: 70000,
            daDat: false,
          },
          {
            soGhe: "A3",
            gia: 70000,
            daDat: true,
            khachHang: "khanh",
            gio: "13:15:30",
          },
          {
            soGhe: "A4",
            gia: 70000,
            daDat: false,
          },
          {
            soGhe: "A5",
            gia: 70000,
            daDat: true,
            khachHang: "khanh",
            gio: "13:15:30",
          },
        ],
      },
      {
        hang: "B",
        danhSachGhe: [
          {
            soGhe: "B1",
            gia: 70000,
            daDat: true,
            khachHang: "khanh",
            gio: "12:15:30",
          },
          {
            soGhe: "B2",
            gia: 70000,
            daDat: true,
            khachHang: "khanh",
            gio: "10:15:30",
          },
          {
            soGhe: "B3",
            gia: 70000,
            daDat: false,
          },
          {
            soGhe: "B4",
            gia: 70000,
            daDat: false,
          },
          {
            soGhe: "B5",
            gia: 70000,
            daDat: true,
            khachHang: "nhut",
            gio: "15:12:30",
          },
        ],
      },
    ],
  };

  updateDaChon = (soGhe) => {
    const updatedArr = this.state.arr.map((hang) => {
      const updateddanhSachGhe = hang.danhSachGhe.map((ghe) => {
        if (ghe.soGhe === soGhe) {
          return { ...ghe, daChon: !ghe.daChon };
        }
        return ghe;
      });
      return { ...hang, danhSachGhe: updateddanhSachGhe };
    });

    this.setState({ arr: updatedArr });
  };
  render() {
    let gheDaDat = this.state.arr
      .flatMap((hang) => hang.danhSachGhe)
      .filter((item) => item.daDat === true);
    console.log(this.state.arr);

    // Tạo nhóm ghế theo giờ và khách hàng
    const seatGroups = {};

    for (const item of this.state.arr) {
      for (const ghe of item.danhSachGhe) {
        if (ghe.daDat) {
          const key = `${ghe.gio}-${ghe.khachHang}`;
          if (key in seatGroups) {
            seatGroups[key].push(ghe);
          } else {
            seatGroups[key] = [ghe];
          }
        }
      }
    }

    // In kết quả
    for (const key in seatGroups) {
      console.log(`Giờ và khách hàng: ${key}`);
      seatGroups[key].forEach((ghe) => {
        console.log(`- Ghế số ${ghe.soGhe}, giá ${ghe.gia}`);
      });
      console.log();
    }

    return (
      <div>
        <h1>Demo duyệt mảng</h1>
        <button
          type="button"
          onClick={() => {
            this.updateDaChon("B3");
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
