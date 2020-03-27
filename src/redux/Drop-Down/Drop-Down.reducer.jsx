import { DATA } from "../../data/data";

const MONTH = DATA[DATA.length - 1]; // Returns the most current month data

const dropDownReducer = (state = { DATA, MONTH }, action) => {
  switch (action.type) {
    case "SELECT_DATE":
      state.DATA.map(
        data => `${data.date.month}/${data.date.day}/${data.date.year}`
      ).filter((month, index) => {
        if (action.payload === month) {
          return (state.MONTH = state.DATA[index]);
        }
        return { ...state };
      });
      return { ...state };
    default:
      return { ...state };
  }
};

export default dropDownReducer;
