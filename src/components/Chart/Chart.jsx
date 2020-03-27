import React from "react";
import { connect } from "react-redux";

// Chart.js
import { Bar } from "react-chartjs-2";

const Chart = ({ legendPosition, monthSales }) => {
  let monthTotal =
    monthSales.bananas +
    monthSales.strawberries +
    monthSales.apples +
    monthSales.oranges;

  let month = [
    monthSales.bananas,
    monthSales.strawberries,
    monthSales.apples,
    monthSales.oranges,
    monthTotal
  ];

  let chartTitle = `Sale Date: ${monthSales.date.month}/${monthSales.date.day}/${monthSales.date.year}`;

  let fruits = ["Bananas", "Strawberries", "Apples", "Oranges", "All Fruits"];

  let barColors = [
    "rgba(255, 206, 86, 0.6)",
    "rgba(255, 99, 132, 0.6)",
    "rgba(141, 182, 0, 0.6)",
    "rgba(255, 165, 0, 0.6)",
    "rgba(193, 162, 255, 0.6)"
  ];

  return (
    <div>
      <Bar
        data={{
          labels: fruits,
          datasets: [
            {
              label: "Sales",
              data: month,
              backgroundColor: barColors
            }
          ]
        }}
        options={{
          title: {
            display: true,
            text: chartTitle,
            fontSize: 25
          },
          legend: {
            display: true,
            position: legendPosition
          }
        }}
      />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    monthSales: state.salesData.MONTH
  };
};

export default connect(mapStateToProps)(Chart);
