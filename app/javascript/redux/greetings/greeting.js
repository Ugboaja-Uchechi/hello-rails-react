const LOAD_MESSAGE = 'space-travelers-hub/missions/LOAD_MISSIONS';

const initialState = [];

export const loadMessage = (message) => ({
  type: LOAD_MESSAGE,
  payload: message,
});


const getMessage = async () => {
  const request = await fetch('http://127.0.0.1:3000/api/v1/random');
  const result = await request.json();
  return result;
};

export const loadMessages = () => async (dispatch) => {
  const getResult = await getMessage();
  const greeting = getResult;
  if (greeting) {
    dispatch(loadMessage(greeting.message));
  }
};

const greetingsReducer = (state = initialState, action) => {
  const { payload: message } = action;
  switch (action.type) {
    case LOAD_MESSAGE:
      return message;
    default:
      return state;
  }
};

export default greetingsReducer;