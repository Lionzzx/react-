import React from "react";
import { Table, Card, Modal } from "antd";
import axios from "../../axios";
import Utils from "../../util/utils";
export default class Tables extends React.Component {
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
        dataIndex: "id"
      },
      {
        title: "用户名",
        dataIndex: "username"
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex === 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        dataIndex: "state",
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
        render(interest) {
          let config = {
            "1": "跑步",
            "2": "篮球",
            "3": "跳舞",
            "4": "睡觉",
            "5": "跳舞",
            "6": "睡觉",
            "7": "睡觉",
            "8": "睡觉"
          };
          return config[interest];
        }
      },
      {
        title: "生日",
        dataIndex: "birthday"
      },
      {
        title: "地址",
        dataIndex: "address"
      },
      {
        title: "时间",
        dataIndex: "time"
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
        <Card title="基础表格">
          <Table
            bordered
            pagination={true}
            dataSource={dataSource}
            columns={columns}
          />
        </Card>
        <Card style={{ margin: "10px 0" }} title="Mock-动态渲染表格">
          <Table dataSource={this.state.dataSource2} columns={columns2} />
        </Card>
        <Card style={{ margin: "10px 0" }} title="Mock-单选功能">
          <Table
            onRow={(record, index) => {
              return {
                onClick: event => {
                  this.onRowClick(record, index);
                } // 点击行
              };
            }}
            rowSelection={rowSelection}
            dataSource={this.state.dataSource2}
            columns={columns2}
          />
        </Card>
        <Card style={{ margin: "10px 0" }} title="Mock-多选功能">
          <Table
            onRow={(record, index) => {
              return {
                onClick: event => {
                  this.onRowClick(record, index);
                } // 点击行
              };
            }}
            rowSelection={rowCheckSelection}
            dataSource={this.state.dataSource2}
            columns={columns2}
          />
        </Card>
        <Card style={{ margin: "10px 0" }} title="Mock-分页功能">
          <Table
            pagination={this.state.pagination}
            dataSource={this.state.dataSource2}
            columns={columns2}
          />
        </Card>
      </div>
    );
  }
}
