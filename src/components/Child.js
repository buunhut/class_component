import React, { Component } from "react";
import axios from "axios";

export default class Child extends Component {
  constructor(props) {
    super();
    this.state = {
      product: {},
      id: "",
    };
  }

  static getDerivedStateFromProps(newProps, currentState) {
    let url = window.location.href.split("/"); // http://localhost:3000/detail/5  ["http:","","localhost3000","detail","5"]
    const id = url[url.length - 1];
    console.log(id);

    return {
      ...currentState,
      id,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      console.log("updaterddd");
      // gọi dữ liệu giày ứng với số thay đổi
      this.getProductById(this.state.id);
    }
  }

  getProductById = async (id) => {
    let res = await axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    });
    this.setState({
      ...this.state,
      product: res.data.content,
    });
  };

  render() {
    let sanPham = { ...this.state.product };
    let { id, name, price, image, shortDescription: mota } = sanPham;
    return (
      <>
        <span>{id}</span>
        <h1>{name}</h1>
        <img src={image} alt="" />
        <h2>{price}</h2>
        <p>{mota}</p>
      </>
    );
  }
}
