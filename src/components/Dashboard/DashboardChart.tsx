import React from "react";
import PageTitle from "../common/PageTitle";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import DashboardCardTitle from "./DashboardCardTitle";
import ReactApexchart from "react-apexcharts";

const DashboardChart = () => {
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
                  data: Array.from({ length: 6 }).map((_, index) => {
                    return {
                      x: index + 1,
                      y: (index + 1) * 10,
                      //   fillColor: "#eee",
                    };
                  }),
                },
              ]}
              options={{
                plotOptions: {
                  bar: {
                    dataLabels: {
                      position: "top", // top, center, bottom
                    },
                  },
                },
                dataLabels: {
                  offsetY: 0,
                  background: {
                    borderColor: "#000",
                    foreColor: "#000",
                    padding: 20,
                  },

                  style: {
                    colors: ["#fff"],
                  },
                  formatter(val, opts) {
                    // console.log({ val, opts });
                    return "";
                  },
                },
                chart: {
                  toolbar: {
                    show: false,
                  },
                },
              }}
              //   options={{
              //     xaxis: {
              //       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              //     },
              //   }}
              height={300}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardChart;
