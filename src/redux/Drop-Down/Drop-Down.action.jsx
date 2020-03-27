// Pure function. If type is of 'SELECT_DATE', it will return the payload of the innerText'
export const dropDownSelect = select => {
  return {
    type: "SELECT_DATE",
    payload: select.target.innerText
  };
};
