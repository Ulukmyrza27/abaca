import { Tabs } from "antd";
import React from "react";
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const App = () => (
  <Tabs onChange={onChange} type="card">
    <TabPane tab="Summary" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Financials" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="People" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Technology" key="4">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Signals/News" key="5">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Similar companies" key="6">
      Content of Tab Pane 6
    </TabPane>
  </Tabs>
);

export default App;
