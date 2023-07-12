import { configureStore } from "@reduxjs/toolkit";
const initialState = {
  arrSanPham: [
    {
      ma: "001",
      ten: "iphone 12 pro",
      gia: 12000,
      mota: "Chi tiết sản của iphone 12",
    },
    {
      ma: "002",
      ten: "iphone 13 pro",
      gia: 12000,
    },
    {
      ma: "003",
      ten: "iphone 14 pro",
      gia: 12000,
    },
    {
      ma: "004",
      ten: "iphone 15 pro",
      gia: 12000,
    },
    {
      ma: "005",
      ten: "iphone 16 pro",
      gia: 12000,
    },
    {
      ma: "006",
      ten: "iphone 16 pro",
      gia: 12000,
    },
    {
      ma: "007",
      ten: "iphone 16 pro",
      gia: 12000,
    },
    {
      ma: "008",
      ten: "iphone 16 pro",
      gia: 12000,
    },
    {
      ma: "008",
      ten: "iphone 16 pro",
      gia: 12000,
    },
  ],
  gioHang: [
    {
      ma: "t01",
      ten: "Demo sản phẩm",
      gia: 600000,
      soLuong: 1,
      mota: "chi tiết demo",
    },
  ],
  sanPham: {
    ma: "",
    ten: "",
    gia: "",
  },
};
export const store = configureStore({
  reducer: {
    duLieu: (state = initialState, action) => {
      switch (action.type) {
        case "themgiohang":
          return {
            ...state,
            gioHang: action.gioHang,
          };
        default:
          return state;
      }
    },
  },
});
