import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Styles
import "./Data-Table.scss";

const DataTable = ({ salesData, month, title }) => {
  const dataTableLabels = [];
  const tableHeader = [];

  // Add table header
  if (dataTableLabels[0] === undefined) {
    for (let key in salesData[0]) {
      if (key !== "id") {
        dataTableLabels.push(key);
      }
    }
  }

  // Remove duplicates
  for (let x = 0; x < dataTableLabels.length; x++) {
    if (tableHeader.indexOf(dataTableLabels[x]) === -1) {
      tableHeader.push(dataTableLabels[x]);
    }
  }

  return (
    <div className="data-table">
      <h2 className="data-table__title">{title}</h2>
      <div className="data-table__table">
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
                className={id === month.id ? "data-table__selected" : null} // Highlight the selected row background to gray
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
    </div>
  );
};

DataTable.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  bananas: PropTypes.number,
  strawberries: PropTypes.number,
  apples: PropTypes.number,
  oranges: PropTypes.number,
  index: PropTypes.number,
  label: PropTypes.string,
  salesData: PropTypes.array,
  month: PropTypes.object,
  title: PropTypes.string,
  dataTableLabels: PropTypes.array,
  tableHeader: PropTypes.array
};

const mapStateToProps = state => {
  return {
    salesData: state.salesData.DATA,
    month: state.salesData.MONTH
  };
};

export default connect(mapStateToProps)(DataTable);
