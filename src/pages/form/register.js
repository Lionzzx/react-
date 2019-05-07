import React from "react";
import moment from "moment";
import {
  Card,
  Form,
  Input,
  Icon,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  Upload,
  Checkbox,
  Button
} from "antd";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
class FormRegister extends React.Component {
  state = {
    imageUrl: ""
  };
  handleSubmit = () => {
    const data = this.props.form.getFieldsValue();
    console.log(JSON.stringify(data));
  };
  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12
        }
      }
    };
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    };
    return (
      <div>
        <Card title="注册表单">
          <Form {...formItemLayout}>
            <FormItem label="用户名">
              {getFieldDecorator("userName", {
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
            </FormItem>
            <FormItem label="密码">
              {getFieldDecorator("password", {
                initialValue: "",
                rules: [{}]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入密码"
                />
              )}
            </FormItem>
            <FormItem label="性别">
              {getFieldDecorator("sex", {
                initialValue: "1"
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="年龄">
              {getFieldDecorator("age", {
                initialValue: 18
              })(<InputNumber />)}
            </FormItem>
            <FormItem label="当前状态">
              {getFieldDecorator("state", {
                initialValue: "1"
              })(
                <Select>
                  <Option value="1">咸鱼一条</Option>
                  <Option value="2">风华浪子</Option>
                  <Option value="3">百度FE</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="爱好">
              {getFieldDecorator("like", {
                initialValue: ["2", "1"]
              })(
                <Select mode="multiple">
                  <Option value="1">踢足球</Option>
                  <Option value="2">打篮球</Option>
                  <Option value="3">游泳</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="是否已婚">
              {getFieldDecorator("isMarried", {
                valuePropName: "checked",
                initialValue: true
              })(<Switch />)}
            </FormItem>
            <FormItem label="生日">
              {getFieldDecorator("birthday", {
                initialValue: moment("2018-10-10 12:00:43")
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </FormItem>
            <FormItem label="联系地址">
              {getFieldDecorator("address", {
                initialValue: "北京市海淀区"
              })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
            </FormItem>
            <FormItem label="头像">
              {getFieldDecorator("userImg", {})(
                <Upload
                  listType="picture-card"
                  onChange={this.handleChange}
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                >
                  {this.state.imageUrl ? (
                    <img src={this.state.imageUrl} alt="avatar" />
                  ) : (
                    "上传"
                  )}
                </Upload>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              {getFieldDecorator("userImg", {})(
                <Checkbox>
                  我已阅读过<a href="#home">慕课协议</a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(FormRegister);
