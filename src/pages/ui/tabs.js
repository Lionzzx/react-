import React from "react";
import {Button, Icon, Tabs } from "antd";
import "./index.less";

const TabPane = Tabs.TabPane;
export default class Tab extends React.Component {
  callback = (e) => {console.log(e)};
  render() {
    return (
      <div>
        <Tabs type="card" tabBarExtraContent={<Button>Extra Action</Button>} defaultActiveKey="1" onChange={this.callback}>
          <TabPane
            tab={
              <span>
                <Icon type="apple" />
                Tab 1
              </span>
            }
            key="1"
          >
            Content of Tab Pane 1
          </TabPane>
          <TabPane disabled tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
