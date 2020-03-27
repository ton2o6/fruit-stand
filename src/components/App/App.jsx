import React from "react";
import { connect } from "react-redux";

// Components
import Chart from "../Chart/Chart";
import DataTable from "../Data-Table/Data-Table";
import DropDown from "../Drop-Down/Drop-Down";

// Styles
import "./App.scss";

class App extends React.Component {
  render(props) {
    return (
      <div className="App">
        <div className="App-data-display">
          <div className="App-data-table">
            <div className="App-drop-down-button">
              <DropDown />
            </div>
            <DataTable title="Sales Report" />
          </div>
          <div className="App-chart">
            <Chart legendPosition="top" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state });

export default connect(mapStateToProps)(App);
