import React from "react";
import { Card } from "antd";
import echartTheme from "../echartTheme";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";

export default class Line extends React.Component {
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
          type: "line",
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
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value"
      },
      legend: {
        data: ["OFO订单量", "摩拜订单量"]
      },
      tooltip: {
        trigger: "axis"
      },
      series: [
        {
          name: "OFO订单量",
          type: "line",
          data: [1000, 2000, 1500, 3000, 2000, 800, 400]
        },
        {
          name: "摩拜订单量",
          type: "line",
          data: [4000, 1000, 5500, 6000, 2000, 200, 600]
        }
      ]
    };
  };
  getOption3 = () => {
    return {
      title: {
        text: "用户骑行订单"
      },
      xAxis: {
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value"
      },
      legend: {
        data: ["OFO订单量", "摩拜订单量"]
      },
      tooltip: {
        trigger: "axis"
      },
      series: [
        {
          name: "OFO订单量",
          type: "line",
          data: [1000, 2000, 1500, 3000, 2000, 800, 400],
          areaStyle: {}
        },
        {
          name: "摩拜订单量",
          type: "line",
          data: [4000, 1000, 5500, 6000, 2000, 200, 600],
          areaStyle: {}
        }
      ]
    };
  };
  render() {
    return (
      <div>
        <Card title="折线图表之一">
          <ReactEcharts
            option={this.getOption()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="柱形图表之二" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption2()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="柱形图表之三" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption3()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}
