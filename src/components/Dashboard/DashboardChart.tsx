import React from "react";
import PageTitle from "../common/PageTitle";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import DashboardCardTitle from "./DashboardCardTitle";
import ReactApexchart from "react-apexcharts";

const series = [
  {
    x: "01",
    y: 30,
  },
  {
    x: "02",
    y: 40,
  },
  {
    x: "03",
    y: 50,
    fillColor: "#56CCF2",
  },
  {
    x: "04",
    y: 25,
  },
  {
    x: "05",
    y: 35,
  },
  {
    x: "06",
    y: 38,
  },
];

const DashboardChart = () => {
  // const getHighest = () => {
  //   // let min = -
  //   let result = {
  //     x: "",
  //     y: -Infinity,
  //   };
  //   series.forEach(({ x, y }) => {
  //     if (y > result.y) {
  //       result = {
  //         x,
  //         y,
  //       };
  //     }
  //   });

  //   return result;
  // };

  return (
    <div className="dashboard-chart">
      <PageTitle text="Welcome Back Dr.Taylor!" />
      <Card>
        <CardBody>
          <DashboardCardTitle title="Visits This month" />
          <div>
            <ReactApexchart
              type="bar"
              series={[
                {
                  data: series,
                },
              ]}
              options={{
                fill: {
                  colors: ["#DFE8F6"],
                },
                plotOptions: {
                  bar: {
                    dataLabels: {
                      position: "top",
                    },
                  },
                },
                // dataLabels: {
                //   enabled: false,
                //   offsetY: -100,
                //   formatter(val) {
                //     const high = getHighest();
                //     if ((val as number) >= high.y) {
                //       return val as number;
                //     }
                //     return "";
                //   },
                // },
                chart: {
                  toolbar: {
                    show: false,
                  },
                },
              }}
              height={320}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardChart;
