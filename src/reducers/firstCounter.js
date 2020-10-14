const InitialState = {
  value: 0
};

export const firstCounter = (state = InitialState, action) => {
  switch (action.type) {
    case "addToFirstCounter":
      return {
        ...state,
        value: state.value + 1
      };
    default:
      return state;
  }
};
