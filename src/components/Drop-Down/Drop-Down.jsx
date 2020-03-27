import React from "react";
import { connect } from "react-redux";
import { dropDownSelect } from "../../redux/Drop-Down/Drop-Down.action";
import PropTypes from "prop-types";

// Styles
import "./Drop-Down.scss";

class DropDown extends React.Component {
  state = {
    showToggle: false
  };

  // This will show or hide the drop down button when clicked
  handleToggle = () => {
    this.setState({ showToggle: !this.state.showToggle });
  };

  // This returns the selected item from the drop down
  handleSelect = e => {
    this.props.dropDownSelect(e);
    this.setState({ showToggle: !this.state.showToggle });
  };

  render() {
    const { showToggle } = this.state;
    const { dropDown, label } = this.props;
    return (
      <div className="drop-down">
        <button
          onClick={this.handleToggle}
          className="drop-down--toggle"
          type="button"
          data-toggle="drop-down"
        >
          {label}
          <span className="drop-down__icon">&#9660;</span>
        </button>
        {showToggle ? (
          <div className="drop-down__menu">
            {dropDown.map(data => (
              <div
                onClick={this.handleSelect}
                key={data.id}
                className="drop-down__item"
              >
                {`${data.date.month}/${data.date.day}/${data.date.year}`}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

DropDown.propTypes = {
  dropDown: PropTypes.array,
  label: PropTypes.string,
  showToggle: PropTypes.bool
};

const mapStateToProps = state => {
  return { dropDown: state.salesData.DATA };
};

export default connect(mapStateToProps, { dropDownSelect })(DropDown);
