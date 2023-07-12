import React, { Component } from "react";

export default class LienHe extends Component {
  render() {
    return (
      <div id="lienHe" className="container">
        LienHe đây là trang liên hệ
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.509383030827!2d106.67729837335551!3d10.772243759274296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f21198a62c1%3A0xa091bdb5049e5008!2zMTEyIMSQLiBDYW8gVGjhuq9uZywgUGjGsOG7nW5nIDQsIFF14bqtbiAzLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1688437732162!5m2!1sen!2s"
          className="iframe"></iframe>
        </div>
      </div>
    );
  }
}
