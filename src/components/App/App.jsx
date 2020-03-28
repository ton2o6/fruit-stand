import React from "react";

// Components
import Chart from "../Chart/Chart";
import DataTable from "../Data-Table/Data-Table";
import DropDown from "../Drop-Down/Drop-Down";
import PropTypes from "prop-types";

// Styles
import "./App.scss";

const App = () => (
  <div className="App">
    <div className="App-data-display">
      <div className="App-data-table">
        <div className="App-drop-down-button">
          <DropDown label="Select Date" />
        </div>
        <DataTable title="Sales Report" />
      </div>
      <div className="App-chart">
        <Chart legendPosition="top" title="Sale Date:"/>
      </div>
    </div>
  </div>
);


App.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  legendPosition: PropTypes.string
};

export default App;
