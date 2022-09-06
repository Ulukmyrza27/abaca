import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Progress,
  Tooltip,
  Button,
  Col,
  Row,
  Statistic,
} from "antd";
import React from "react";
import "./Cards.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Meta } = Card;

const App = () => (
  //Card 1
  <>
    <h1 className="cards-headername" id="cards">
      Startup profiles
    </h1>
    <div className="cards-list">
      <div className="card">
        <Card
          size="small"
          style={{
            width: 450,
            padding: 10,
          }}
          extra={<a href="/details">Learn more</a>}
          cover={
            <img
              alt="example"
              src="https://mms.businesswire.com/media/20220321005398/en/831430/23/Behavox_logo_OCT_2020.jpg"
            />
          }
          // actions={[
          //   <SettingOutlined key="setting" />,
          //   <EditOutlined key="edit" />,
          //   <EllipsisOutlined key="ellipsis" />,
          // ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="behavox"
            description="A suite of ai-powered security products that help compliance, HR, & security teams protect their company from bad actors"
          />
          <Tooltip title="3 done / 3 in progress / 4 to do">
            Raised
            <Progress
              percent={20}
              success={{
                percent: 10,
              }}
            />
          </Tooltip>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Valuation" value={500000} />
            </Col>
            <Col span={8}>
              <Statistic title="Target" value={100000} />
            </Col>
            <Col span={8}>
              <Statistic title="Investors" value={12} />
            </Col>
          </Row>
        </Card>
      </div>
      {/* //Card-2 */}
      <div className="card">
        <Card
          size="small"
          style={{
            width: 450,
            padding: 10,
          }}
          extra={<a href="/details">Learn more</a>}
          cover={
            <img
              alt="example"
              src="https://images.successstory.com/img_company/ab-5_1609070444.jpg"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="AppBoxo"
            description="Appboxo enables apps to be launched inside of other apps to create beautiful and lightning fast mobile experiences."
          />
          <Tooltip title="3 done / 3 in progress / 4 to do">
            Raised
            <Progress
              percent={55}
              success={{
                percent: 30,
              }}
            />
          </Tooltip>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Valuation" value={500000} />
            </Col>
            <Col span={8}>
              <Statistic title="Target" value={100000} />
            </Col>
            <Col span={8}>
              <Statistic title="Investors" value={12} />
            </Col>
          </Row>
        </Card>
      </div>
      {/* //Card-3 */}
      <div className="card">
        <Card
          size="small"
          style={{
            width: 450,
            padding: 10,
          }}
          extra={<a href="/details">Learn more</a>}
          cover={
            <img
              alt="example"
              src="data:image/png;base64,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"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Codify"
            description="Codify LMS is a simple LM platform that keeps your students and entire schools focused on creating a better learning experience."
          />
          <Tooltip title="3 done / 3 in progress / 4 to do">
            Raised
            <Progress
              percent={70}
              success={{
                percent: 30,
              }}
            />
          </Tooltip>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Valuation" value={500000} />
            </Col>
            <Col span={8}>
              <Statistic title="Target" value={100000} />
            </Col>
            <Col span={8}>
              <Statistic title="Investors" value={12} />
            </Col>
          </Row>
        </Card>
      </div>
      {/* //Card-4 */}
      <div className="card">
        <Card
          size="small"
          style={{
            width: 450,
            padding: 10,
          }}
          extra={<a href="/details">Learn more</a>}
          cover={
            <img
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7M-SZgKeS-m7O_eApUa3C_ITCNnBUdLRiQ&usqp=CAU"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Fitjab"
            description="is the pioneer muslim friendly fitness training app for women. With no equipment required, You can train anywhere and anytime you want.
          "
          />
          <Tooltip title="3 done / 3 in progress / 4 to do">
            Raised
            <Progress
              percent={90}
              success={{
                percent: 10,
              }}
            />
          </Tooltip>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Valuation" value={500000} />
            </Col>
            <Col span={8}>
              <Statistic title="Target" value={100000} />
            </Col>
            <Col span={8}>
              <Statistic title="Investors" value={12} />
            </Col>
          </Row>
        </Card>
      </div>
      {/* //Card-5 */}
      <div className="card">
        <Card
          size="small"
          style={{
            width: 450,
            padding: 10,
          }}
          extra={<a href="/details">Learn more</a>}
          cover={
            <img
              alt="example"
              src="https://st-0.akipress.org/st_runews/.storage/limon3/images/FEVRALIO2022/d0a9540af3c8e2cdb96e16d1e5ff70b9.jpg"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="NB Fit"
            description="Smart fitness & health coaching. Get fitter, healthier and happier with fitness and health coaching from experts"
          />
          <Tooltip title="3 done / 3 in progress / 4 to do">
            Raised
            <Progress
              percent={20}
              success={{
                percent: 30,
              }}
            />
          </Tooltip>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Valuation" value={500000} />
            </Col>
            <Col span={8}>
              <Statistic title="Target" value={100000} />
            </Col>
            <Col span={8}>
              <Statistic title="Investors" value={12} />
            </Col>
          </Row>
        </Card>
      </div>
      {/* //Card-6 */}
      <div className="card">
        <Card
          size="small"
          style={{
            width: 450,
            padding: 10,
          }}
          extra={<a href="/details">Learn more</a>}
          cover={
            <img
              alt="example"
              src="data:image/jpeg;base64,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"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="GoDee"
            description="By bringing technology to the public mobility experience, GoDee provides the smartest way of commute in Ho Chi Minh city"
          />
          <Tooltip title="3 done / 3 in progress / 4 to do">
            Raised
            <Progress
              percent={80}
              success={{
                percent: 40,
              }}
            />
          </Tooltip>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Valuation" value={500000} />
            </Col>
            <Col span={8}>
              <Statistic title="Target" value={100000} />
            </Col>
            <Col span={8}>
              <Statistic title="Investors" value={12} />
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  </>
);

export default App;
