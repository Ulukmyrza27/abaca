import { Avatar, List, Space } from "antd";
import React from "react";
import "./Insights.css";
const data = Array.from({
  length: 3,
}).map((_, i) => ({
  href: "https://news.crunchbase.com/venture/biggest-funding-rounds-vc-startups-seatgeek-triller/",
  title: `Appboxo raises $7M to turn any app into a super app ${i}`,
  description: "By Chris Metinko",
  content: "06.09.2022",
  // href2:
  //   "https://news.crunchbase.com/venture/biggest-funding-rounds-vc-startups-seatgeek-triller/",
  // title2: `Appboxo raises $7M to turn any app into a super app ${i}`,
  // description2: "By Chris Metinko",
  // content2: "06.09.2022",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const App = () => (
  <>
    <div className="insights-main" id="insights">
      <h1 className="insights-header">CA Startup insights and analysis</h1>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        footer={
          <a href="https://news.crunchbase.com/">
            <b style={{ fontColor: "rgb(27, 168, 200)" }}>
              More news and insights ➡
            </b>
          </a>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://techcrunch.com/wp-content/uploads/2020/12/Antler-Appboxo-Hero-2.png?w=1390&crop=1"
              />
            }
          >
            {item.content}
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />

            <div>
              Pioneered by WeChat almost four years ago, mini-apps are now
              common in China and India, and gaining traction in other markets,
              too. Mini-apps, or lightweight apps designed for integration into
              host apps, allow smartphone users to access several services
              through one app, saving them data and storage space.
            </div>
          </List.Item>
        )}
      />
    </div>
  </>
);

export default App;
