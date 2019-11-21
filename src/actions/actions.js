export const GET_FLORISTS = "GET_FLORISTS";
export const getFlorists = (latitude, longitude) => ({
  type: GET_FLORISTS,
  location: [latitude, longitude]
});

export const GET_FLORISTS2 = "GET_FLORISTS2";
export const getFlorists2 = userInput => ({
  type: GET_FLORISTS2,
  userInput
});

export const GET_FLORISTS_SUCCESS = "GET_FLORISTS_SUCCESS";
export const getFloristsSuccess = data => ({
  type: GET_FLORISTS_SUCCESS,
  data
});
