import React from "react";
import { Card, Row, Col, Modal } from "antd";
import "./index.less";
export default class Gallery extends React.Component {
  state = {
    modalVisible: false,
    currentImg: ""
  };
  openGallery = (item, e) => {
    console.log(item, e);
    this.setState({
      modalVisible: true,
      currentImg: `/gallery/${item}`
    });
  };
  render() {
    const imgs = [
      ["1.png", "2.png", "3.png", "4.png", "5.png"],
      ["6.png", "7.png", "8.png", "9.png", "10.png"],
      ["11.png", "12.png", "13.png", "14.png", "15.png"],
      ["16.png", "17.png", "18.png", "19.png", "20.png"],
      ["1.png", "2.png", "3.png", "4.png", "5.png"]
    ];
    const imgList = imgs.map(list =>
      list.map(item => {
        return (
          <Card
            onClick={() => {
              this.openGallery(item);
            }}
            cover={<img alt="example" src={`/gallery/${item}`} />}
          >
            <Card.Meta title="REACT" />
          </Card>
        );
      })
    );
    return (
      <div>
        <Row gutter={10}>
          <Col md={5}>{imgList[0]}</Col>
          <Col md={5}>{imgList[1]}</Col>
          <Col md={5}>{imgList[2]}</Col>
          <Col md={5}>{imgList[3]}</Col>
          <Col md={4}>{imgList[4]}</Col>
        </Row>
        <Modal
          title="图片画廊"
          width={300}
          height={500}
          visible={this.state.modalVisible}
          onCancel={() => this.setState({ modalVisible: false })}
          footer={null}
        >
          <img style={{ width: "100%" }} alt="example" src={this.state.currentImg} />
        </Modal>
      </div>
    );
  }
}
