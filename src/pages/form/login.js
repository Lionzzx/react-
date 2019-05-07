import React from "react";
import { Card, Form, Input, Button, Icon, message, Checkbox } from "antd";

class FormLogin extends React.Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName}恭喜你`);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入账号"
              />
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Log in</Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="登录水平表单">
          <Form style={{ width: 300 }} layout="horizontal">
            <Form.Item label="用户名">
              {getFieldDecorator("userName", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "用户不能为空"
                  },
                  {
                    pattern: /^\w+$/g,
                    message: "请输入字母或数字"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入账号"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "用户不能为空"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入账号"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                initialValue: false,
                valuePropName: "checked"
              })(<Checkbox>记住密码</Checkbox>)}
              <a href="#name">忘记密码</a>
            </Form.Item>
            <Form.Item>
              <Button onClick={this.handleSubmit} type="primary">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(FormLogin);
