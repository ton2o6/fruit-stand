import React from "react";
import { connect } from "react-redux";
import { dropDownSelect } from "../../redux/Drop-Down/Drop-Down.action";

// Styles
import "./Drop-Down.scss";

class DropDown extends React.Component {
  state = {
    showToggle: false
  };

  handleToggle = () => {
    this.setState({ showToggle: !this.state.showToggle });
  };

  handleSelect = e => {
    this.props.dropDownSelect(e);
    this.setState({ showToggle: !this.state.showToggle });
  };

  render() {
    const { showToggle } = this.state;
    const { dropDown } = this.props;
    return (
      <div className="drop-down">
        <button
          onClick={this.handleToggle}
          className="drop-down--toggle"
          type="button"
          data-toggle="drop-down"
        >
          Select Dates
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

const mapStateToProps = state => {
  return { dropDown: state.salesData.DATA };
};

export default connect(mapStateToProps, { dropDownSelect })(DropDown);
