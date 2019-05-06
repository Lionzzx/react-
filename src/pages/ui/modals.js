import React from "react";
import { Modal, Card, Button } from "antd";
import "./index.less";
export default class Modals extends React.Component {
  state = {
    showModal1: false
  };
  handleOpen = (type, e) => {
    this.setState({
      [type]: true
    });
  };
  handleConfirm = (type) => {
    Modal[type]({
      title: '确认?',
      content: '你确认你学会了吗',
      onOk() {
        console.log('oK')
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }
  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button type="primary" onClick={() => this.handleOpen("showModal1")}>
            Open
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal2")}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal3")}>
            顶部20px弹框
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal4")}>
            水平垂直居中
          </Button>
        </Card>
        <Card title="信息确认框">
          <Button type="primary" onClick={() => this.handleConfirm("confirm")}>confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm("warning")}>warning</Button>
          <Button type="primary" onClick={() => this.handleConfirm("error")}>error</Button>
          <Button type="primary" onClick={() => this.handleConfirm("success")}>success</Button>
          <Button type="primary" onClick={() => this.handleConfirm("info")}>info</Button>
        </Card>
        <Modal
          title="Open"
          visible={this.state.showModal1}
          onCancel={() =>
            this.setState({
              showModal1: false
            })
          }
        >
          <p>欢迎学习REACT</p>
        </Modal>
        <Modal
          title="自定义页脚"
          visible={this.state.showModal2}
          onCancel={() =>
            this.setState({
              showModal2: false
            })
          }
          okText="好的"
        >
          <p>欢迎学习REACT</p>
        </Modal>
        <Modal
          style={{top:20}}
          title="顶部20px弹框"
          visible={this.state.showModal3}
          onCancel={() =>
            this.setState({
              showModal3: false
            })
          }
        >
          <p>欢迎学习REACT</p>
        </Modal>
        <Modal
          wrapClassName="vertical-center-modal"
          title="Basic Modal"
          visible={this.state.showModal4}
          onCancel={() =>
            this.setState({
              showModal4: false
            })
          }
        >
          <p>欢迎学习REACT</p>
        </Modal>
      </div>
    );
  }
}
