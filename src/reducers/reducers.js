const init_state = {
  florists: [],
  loading: false
};

export default (state = init_state, action) => {
  switch (action.type) {
    case "GET_FLORISTS":
      return {
        ...state,
        loading: true
      };

    case "GET_FLORISTS_SUCCESS":
      return {
        ...state,
        florists: action.data,
        loading: false
      };

    default:
      return { ...state };
  }
};
