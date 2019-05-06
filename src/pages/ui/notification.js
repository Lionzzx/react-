import React from "react";
import { Card, notification, Button } from "antd";
import "./index.less";

export default class Notification extends React.Component {
  openNotication = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  };
  render() {
    return (
      <div>
        <Card title="通知提醒框">
          <Button type="primary" onClick={this.openNotication}>
            Success
          </Button>
        </Card>
      </div>
    );
  }
}
