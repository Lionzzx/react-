import React from "react";
import { Card } from "antd";
import echartTheme from "./../echartTheme";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import 'echarts/lib/component/markPoint'
import ReactEcharts from "echarts-for-react";

export default class Bar extends React.Component {
  componentWillMount() {
    echarts.registerTheme("Imooc", echartTheme);
  }
  getOption = () => {
    return {
      title: {
        text: "用户骑行订单"
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value"
      },
      tooltip: {
        trigger: "axis"
      },
      series: [
        {
          name: "订单量",
          type: "bar",
          data: [1000, 2000, 1500, 3000, 2000, 800, 400]
        }
      ]
    };
  };
  getOption2 = () => {
    return {
      title: {
        text: "用户骑行订单"
      },
      legend: {
        data: ["OFO", "摩拜", "小蓝"]
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value"
      },
      tooltip: {
        trigger: "axis"
      },
      series: [
        {
          name: "OFO",
          type: "bar",
          data: [1000, 2000, 1500, 3000, 2000, 800, 400]
        },
        {
          name: "摩拜",
          type: "bar",
          data: [100, 42000, 1500, 3000, 2000, 800, 4500]
        },
        {
          name: "小蓝",
          type: "bar",
          data: [1000, 2000, 15500, 5500, 12000, 800, 5400]
        }
      ]
    };
  };
  render() {
    return (
      <div>
        <Card title="柱形图表之一">
          <ReactEcharts
            option={this.getOption()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="柱形图表之一" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption2()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}
