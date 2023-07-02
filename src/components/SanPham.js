import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Child from "./Child";

export default class SanPham extends Component {
  state = {
    arrSanPham: [
      // {
      //   ma: "001",
      //   ten: "iphone 12",
      //   gia: 12000,
      //   mota: "mô tả iphone 12",
      // },
      // {
      //   ma: "002",
      //   ten: "iphone 13",
      //   gia: 13000,
      //   mota: "mô tả iphone 13",
      // },
      // {
      //   ma: "003",
      //   ten: "iphone 14",
      //   gia: 14000,
      //   mota: "mô tả iphone 14",
      // },
      // {
      //   ma: "004",
      //   ten: "iphone 14",
      //   gia: 14000,
      //   mota: "mô tả iphone 14",
      // },
      // {
      //   ma: "005",
      //   ten: "iphone 15",
      //   gia: 15000,
      //   mota: "mô tả iphone 15",
      // },
      // {
      //   ma: "006",
      //   ten: "iphone 16",
      //   gia: 14000,
      //   mota: "mô tả iphone 16",
      // },
      // {
      //   ma: "007",
      //   ten: "iphone 17",
      //   gia: 17000,
      //   mota: "mô tả iphone 17",
      // },
      // {
      //   ma: "008",
      //   ten: "iphone 18",
      //   gia: 18000,
      //   mota: "mô tả iphone 18",
      // },
      // {
      //   ma: "009",
      //   ten: "iphone 19",
      //   gia: 19000,
      //   mota: "mô tả iphone 19",
      // },
      // {
      //   ma: "0010",
      //   ten: "iphone 20",
      //   gia: 20000,
      //   mota: "mô tả iphone 20",
      // },
      // {
      //   ma: "0011",
      //   ten: "iphone 21",
      //   gia: 21000,
      //   mota: "mô tả iphone 21",
      // },
      // {
      //   ma: "0012",
      //   ten: "iphone 22",
      //   gia: 22000,
      //   mota: "mô tả iphone 22",
      // },
      // {
      //   ma: "0013",
      //   ten: "iphone 23",
      //   gia: 23000,
      //   mota: "mô tả iphone 23",
      // },
      // {
      //   ma: "0014",
      //   ten: "iphone 24",
      //   gia: 24000,
      //   mota: "mô tả iphone 24",
      // },
      // {
      //   ma: "0015",
      //   ten: "iphone 25",
      //   gia: 25000,
      //   mota: "mô tả iphone 25",
      // },
      // {
      //   ma: "0016",
      //   ten: "iphone 26",
      //   gia: 26000,
      //   mota: "mô tả iphone 26",
      // },
    ],
    chiTiet: {
      // ma: "",
      // ten: "",
      // gia: "",
      // mota: "",
    },
    modal: "none",
  };

  getAllProducts = async () => {
    let res = await axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product",
    });
    this.setState({
      ...this.state,
      arrSanPham: res.data.content,
    });
  };

  componentDidMount() {
    this.getAllProducts();
  }

  // oldScrollPosition = 0;
  // xemChiChiTiet = (item) => {
  //   this.oldScrollPosition = window.scrollY;
  //   this.setState({
  //     ...this.state,
  //     chiTiet: item,
  //     modal: "block",
  //   });
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.chiTiet !== nextState) {
      return true;
    } else {
      return false;
    }
  }
  // render dữ liệu
  render() {
    let allSanPham = [...this.state.arrSanPham];
    let modal = this.state.modal;
    let chiTiet = { ...this.state.chiTiet };

    return (
      <>
        <Child />
        <div id="sanPham">
          {allSanPham.map((item, index) => {
            let { id, name, image, price, shortDescription: mota } = item;
            return (
              <div
                className="item"
                key={index}
                // onClick={() => this.xemChiChiTiet(item)}
              >
                <img src={image} alt="" />
                <NavLink
                  to={`/sanpham/${id}`}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                    });
                  }}
                >
                  <h3>{name}</h3>

                  <h4>{price}</h4>
                  <span>{mota}</span>
                </NavLink>
              </div>
            );
          })}
          {/* model */}
          <div id="modal" style={{ display: modal }}>
            {/* <button
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
          </button> */}
            <h1>chi tiết sản phẩm</h1>
            <div>
              <p>{chiTiet.id}</p>
              <h1>{chiTiet.name}</h1>
              <img src={chiTiet.image} alt="" />
              <p>{chiTiet.price}</p>
              <span>{chiTiet.mota}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Child from "./Child";

// function SanPham() {
//   const [arrSanPham, setArrSanPham] = useState([]);
//   const [chiTiet, setChiTiet] = useState({});
//   const [modal, setModal] = useState("none");
//   const navigate = useNavigate();

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   const getAllProducts = async () => {
//     let res = await axios({
//       method: "get",
//       url: "https://shop.cyberlearn.vn/api/Product",
//     });
//     setArrSanPham(res.data.content);
//   };

//   const xemChiChiTiet = (id) => {
//     navigate(`/sanpham/${id}`);
//   };

//   return (
//     <>
//       <Child />

//       <div id="sanPham">
//         {arrSanPham.map((item, index) => {
//           let { id, name, image, price, shortDescription: mota } = item;
//           return (
//             <div className="item" key={index} onClick={() => xemChiChiTiet(id)}>
//               <img src={image} alt="" />
//               <h3>{name}</h3>
//               <h4>{price}</h4>
//               <span>{mota}</span>
//             </div>
//           );
//         })}
//         {/* modal */}
//         <div id="modal" style={{ display: modal }}>
//           <button
//             onClick={() => {
//               setModal("none");
//               window.scrollTo({
//                 top: this.oldScrollPosition,
//                 behavior: "smooth",
//               });
//             }}
//           >
//             close
//           </button>
//           <h1>chi tiết sản phẩm</h1>
//           <div>
//             <p>{chiTiet.id}</p>
//             <h1>{chiTiet.name}</h1>
//             <img src={chiTiet.image} alt="" />
//             <p>{chiTiet.price}</p>
//             <span>{chiTiet.mota}</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SanPham;
