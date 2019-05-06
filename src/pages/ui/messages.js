import React from "react";
import { message, Button, Card } from "antd";
import "./index.less";
export default class Messages extends React.Component {
  success = () => {
    message.loading("Action in progress..", 2.5).then(() => {
      message.success("Loading finished", 2.5);
    });
  };
  render() {
    return (
      <div>
        <Card title="全局提示">
          <Button type="primary" onClick={this.success}>
            Success
          </Button>
        </Card>
      </div>
    );
  }
}
