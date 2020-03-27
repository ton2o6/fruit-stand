import React from "react";
import ReactDOM from "react-dom";
import DropDown from "./../Drop-Down";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "../../../redux/root-reducer";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  const div = document.createElement("div");
  const store = createStore(combineReducers);

  ReactDOM.render(
    <Provider store={store}>
      <DropDown />
    </Provider>,
    div
  );
});
