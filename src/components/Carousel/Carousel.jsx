import { Button, Carousel } from "antd";
import React from "react";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "none",
  display: "flex",
  justifyContent: "center",
};

const App = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        {" "}
        <img
          style={{ width: "100%", maxHeight: "auto" }}
          src={`https://images.unsplash.com/photo-1562825606-7e7187e44a83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80`}
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {" "}
        <img
          style={{ width: "80%", justifyContent: "center", maxHeight: "auto" }}
          src={`https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img
          style={{
            width: "auto",
            justifyContent: "center",
            maxHeight: "auto",
          }}
          src={`https://cdn.b12.io/client_media/0KPLsAoX/24dc6754-0365-11ed-9f9b-0242ac110002-jpg-regular_image.jpeg`}
        />
      </h3>
    </div>
  </Carousel>
);

export default App;
