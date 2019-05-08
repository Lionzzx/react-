import React from "react";
import { Card, Button, Modal } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class RichText extends React.Component {
  state = {
    editorState: "",
    showRichText: false,
    contentState: ""
  };
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };
  handleClearContent = () => {
    this.setState({
      editorState: ""
    });
  };
  onContentStateChange = contentState => {
    console.log(contentState);
    this.setState({
      contentState
    });
  };
  handleGetText = () => {
    this.setState({
      showRichText: true
    });
  };
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.handleClearContent}>
            清除内容
          </Button>
          <Button onClick={this.handleGetText} type="primary">
            获取HTML文本
          </Button>
        </Card>
        <Card title="富文本编辑器">
          <Editor
            editorState={editorState}
            onContentStateChange={this.onContentStateChange}
            onEditorStateChange={this.onEditorStateChange}
          />
        </Card>
        <Modal
          title="富文本内容"
          footer={null}
          onCancel={() => {
            this.setState({
              showRichText: false
            });
          }}
          visible={this.state.showRichText}
        >
          {draftToHtml(this.state.contentState)}
        </Modal>
      </div>
    );
  }
}
