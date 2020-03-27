import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Chart.js
import { Bar } from "react-chartjs-2";

const Chart = ({ legendPosition, monthSales }) => {
  // Array of fruits for total sales
  const fruitsList = [
    monthSales.bananas,
    monthSales.strawberries,
    monthSales.apples,
    monthSales.oranges
  ];

  // Caculates the total sales of fruits for the day
  const monthTotal = fruitsList.reduce((accu, val) => {
    return accu + val;
  });

  // Array of fruit sales
  const month = [
    monthSales.bananas,
    monthSales.strawberries,
    monthSales.apples,
    monthSales.oranges,
    monthTotal
  ];

  // Chart's title
  const chartTitle = `Sale Date: ${monthSales.date.month}/${monthSales.date.day}/${monthSales.date.year}`;

  // Chart's columns
  const fruits = ["Bananas", "Strawberries", "Apples", "Oranges", "All Fruits"];

  // Chart's bar color
  const barColors = [
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

Chart.propTypes = {
  legendPosition: PropTypes.string,
  monthSales: PropTypes.object,
  month: PropTypes.array,
  chartTitle: PropTypes.string,
  fruits: PropTypes.array,
  barColors: PropTypes.array
};

const mapStateToProps = state => {
  return {
    monthSales: state.salesData.MONTH
  };
};

export default connect(mapStateToProps)(Chart);
