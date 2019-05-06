import React from "react";
import { Radio, Card, Button, Icon } from "antd";
import "./index.less";
export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      value: "default"
    };
  }
  handleRadio = e => {
    this.setState({
      size: e.target.value
    });
  };
  handleCloseLoading = () => {
    this.setState((prestate, props) => {
      console.log(prestate, props);
      return {
        loading: !prestate.loading
      };
    });
  };
  render() {
    const ButtonGroup = Button.Group;
    const RadioGroup = Radio.Group;
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">primary</Button>
          <Button type="dashed">dashed</Button>
          <Button type="danger">danger</Button>
          <Button type="link">link</Button>
          <Button disabled>link</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button type="primary" shape="circle" icon="search" />
          <Button icon="download">下载</Button>
        </Card>
        <Card title="loading按钮">
          <Button loading={this.state.loading} type="primary">
            确定
          </Button>
          <Button loading={this.state.loading} type="primary" shape="circle" />
          <Button loading={this.state.loading}>点击加载</Button>
          <Button loading={this.state.loading} shape="circle" />
          <Button onClick={this.handleCloseLoading} icon="download">
            关闭
          </Button>
        </Card>
        <Card title="按钮组">
          <ButtonGroup>
            <Button style={{ margin: 0 }} type="primary">
              <Icon type="left" />
              Go back
            </Button>
            <Button style={{ margin: 0 }} type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
        </Card>
        <Card title="按钮尺寸">
          <RadioGroup value={this.state.size} onChange={this.handleRadio}>
            <Radio value="small">小</Radio>
            <Radio value="defualt">中</Radio>
            <Radio value="large">大</Radio>
          </RadioGroup>
          <Button size={this.state.size} loading={this.state.loading} type="primary">
            确定
          </Button>
          <Button
            size={this.state.size}
            loading={this.state.loading}
            type="primary"
            shape="circle"
          />
          <Button size={this.state.size} loading={this.state.loading}>
            点击加载
          </Button>
        </Card>
      </div>
    );
  }
}
