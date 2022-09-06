import React from "react";
// import "./styles.css";
import { Layout, Space, List, Typography, Divider } from "antd";
import "antd/dist/antd.css";
import "./PreFooter.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Link, Title } = Typography;

const { Footer } = Layout;

const dataProducts = [
  "Companies",
  "Investors",
  "People",
  "Contacts",
  "Funding Rounds",
  "Acquisitions",
  "Events",
  "Schools",
  "Hubs",
];

const dataServices = [
  "Find investors",
  "Find Investment Opportunities",
  "Market research",
  "Build your own product",
];
const AboutUs = ["About ABACA", "Team", "Partners", "Blog", "Press"];

export default function App() {
  return (
    <div className="prefooter_main">
      <div className="details-news">
        <a
          class="twitter-timeline"
          href="https://twitter.com/appboxo?ref_src=twsrc%5Etfw"
        >
          Tweets by appboxo
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
      <Footer>
        <Space size={100} align="start">
          <List
            header={<Title level={4}>SERVICES</Title>}
            dataSource={dataProducts}
            renderItem={(item) => (
              <List.Item>
                <Link href="#" style={{ color: "black" }}>
                  {item}
                </Link>
              </List.Item>
            )}
          />
          <List
            header={<Title level={4}>SOLUTIONS</Title>}
            dataSource={dataServices}
            renderItem={(item) => (
              <List.Item>
                <Link href="#" style={{ color: "black" }}>
                  {item}
                </Link>
              </List.Item>
            )}
          />
          <List
            header={<Title level={4}>WHO WE ARE</Title>}
            dataSource={AboutUs}
            renderItem={(item) => (
              <List.Item>
                <Link href="#" style={{ color: "black" }}>
                  {item}
                </Link>
              </List.Item>
            )}
          />
          <Divider />
        </Space>

        <Divider />
        <div style={{ textAlign: "center", padding: "12px" }}>
          If you have any questions, please email us: abaca.pro@gmail.com
          <Divider />
          <Space>
            <Link href="#" style={{ color: "black" }}>
              <TwitterOutlined />
            </Link>
            <Link href="#" style={{ color: "black" }}>
              <FacebookOutlined />
            </Link>
            <Link href="#" style={{ color: "black" }}>
              <YoutubeOutlined />
            </Link>
            <Link href="#" style={{ color: "black" }}>
              <InstagramOutlined />
            </Link>
          </Space>
        </div>
      </Footer>
    </div>
  );
}
