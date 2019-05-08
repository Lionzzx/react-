import React from "react";
import { Badge, Table, Button, Card, Modal } from "antd";
import axios from "../../axios";
import Utils from "../../util/utils";
export default class HighTable extends React.Component {
  state = {
    dataSource2: []
  };
  params = {
    page: 1
  };
  requset = async () => {
    try {
      const data = await axios.ajax({
        url: "/table/list",
        data: {
          params: {
            page: this.params.page
          }
        }
      });
      this.setState({
        dataSource2: data.list.map((v, i) => {
          v.key = i;
          return v;
        }),
        pagination: Utils.pagination(data, current => {
          this.params.page = current;
          this.requset();
        })
      });
    } catch (error) {}
  };
  onRowClick = (record, index) => {
    let selectKey = [index];
    Modal.success({
      title: "信息",
      content: `用户名: ${record.username}`
    });

    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  };
  componentDidMount() {
    this.requset();
  }
  handleDelete = item => {
    console.log(item);
  };
  render() {
    const dataSource = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号"
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号"
      }
    ];

    const columns = [
      {
        title: "姓名",
        dataIndex: "name"
      },
      {
        title: "年龄",
        dataIndex: "age"
      },
      {
        title: "住址",
        dataIndex: "address"
      }
    ];
    const columns2 = [
      {
        title: "id",
        dataIndex: "id",
        width: 80
      },
      {
        title: "用户名",
        dataIndex: "username",
        width: 80
      },
      {
        title: "性别",
        dataIndex: "sex",
        width: 80,
        render(sex) {
          return sex === 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        dataIndex: "state",
        width: 80,
        render(state) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子",
            "4": "无所畏惧",
            "5": "北大才子",
            "6": "北大才子"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        width: 80,
        render: interest => {
          let config = {
            "1": <Badge status="success" text="游泳" />,
            "2": <Badge status="success" text="游泳" />,
            "3": <Badge status="error" text="睡觉" />,
            "4": <Badge status="error" text="游泳" />,
            "5": <Badge status="success" text="睡觉" />,
            "6": <Badge status="processing" text="睡觉" />,
            "7": <Badge status="success" text="睡觉" />,
            "8": <Badge status="success" text="睡觉" />
          };
          return config[interest];
        }
      },
      { title: "生日", width: 120, dataIndex: "birthday" },
      { width: 120, title: "地址", dataIndex: "address" },
      { width: 120, title: "时间", dataIndex: "time" },
      {
        title: "操作",
        width: 80,
        render: (text, item) => {
          return (
            <Button
              size="small"
              onClick={() => {
                this.handleDelete(item);
              }}
            >
              删除
            </Button>
          );
        }
      }
    ];
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: "redio",
      selectedRowKeys
    };
    const rowCheckSelection = {
      type: "checkbox",
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys
        });
      }
    };
    return (
      <div>
        <Card title="头部固定">
          <Table
            scroll={{ y: 240 }}
            pagination={false}
            dataSource={this.state.dataSource2}
            columns={columns2}
          />
        </Card>
        <Card style={{ margin: "10px 0" }} title="左侧固定">
          <Table
            scroll={{ x: 2000 }}
            pagination={false}
            dataSource={this.state.dataSource2}
            columns={columns2}
          />
        </Card>
        <Card style={{ margin: "10px 0" }} title="左侧固定">
          <Table
            pagination={false}
            dataSource={this.state.dataSource2}
            columns={columns2}
          />
        </Card>
      </div>
    );
  }
}
