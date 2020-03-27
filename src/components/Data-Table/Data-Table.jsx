import React from "react";
import { connect } from "react-redux";

// Styles
import "./Data-Table.scss";

const DataTable = ({ salesData, month, title }) => {
  // This will dynamically return the table header based on the most recent addition to the DB.
  let dataTableLabels = [];
  let lastDataEntered = [];

  if (dataTableLabels[0] === undefined) {
    for (let key in salesData[0]) {
      if (key !== "id") {
        dataTableLabels.push(key);
      }
    }
    for (let key in salesData[salesData.length - 1]) {
      if (key !== "id") {
        lastDataEntered.push(key);
      }
    }
    if (lastDataEntered.length > dataTableLabels.length) {
      for (let key in salesData[salesData.length - 1]) {
        if (key !== "id") {
          dataTableLabels = [...lastDataEntered];
        }
      }
    }
  }

  const arr = [];

  for (let x = 0; x < dataTableLabels.length; x++) {
    if (arr.indexOf(dataTableLabels[x]) === -1) {
      arr.push(dataTableLabels[x]);
    }
  }

  return (
    <div className="data-table">
      <h2 className="data-table__title">{title}</h2>
      <table className="data-table__table">
        <tbody>
          <tr>
            {dataTableLabels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>

          {salesData.map(
            ({
              id,
              date,
              bananas,
              strawberries,
              apples,
              oranges,
              ...props
            }) => (
              <tr
                key={id}
                id={id}
                className={id === month.id ? "data-table__selected" : null}
              >
                <td>{`${date.month}/${date.day}/${date.year}`}</td>
                <td>{bananas}</td>
                <td>{strawberries}</td>
                <td>{apples}</td>
                <td>{oranges}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    salesData: state.salesData.DATA,
    month: state.salesData.MONTH
  };
};

export default connect(mapStateToProps)(DataTable);
