export const dropDownSelect = select => {
  return {
    type: "SELECT_DATE",
    payload: select.target.innerText
  };
};
