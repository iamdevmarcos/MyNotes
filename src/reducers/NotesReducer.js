const initialState = {
  list: [{ title: "First Note", body: "test 1, 2, 3" }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      console.log("add");
      break;
  }

  return state;
};
