import React from "react";
import { Spin, Card, Alert, Icon } from "antd";
import "./index.less";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
export default class Loadings extends React.Component {
  render() {
    return (
      <div>
        <Card title="loading">
          <Spin />
          <Spin size="large" />
          <Spin>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
          <Spin tip="加载中..." indicator={antIcon}>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}
