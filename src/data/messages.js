

// Action Types
const ADD_MESSAGE = 'messages/ADD_MESSAGE';

const initialState = {
  data: [],
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      // state.messages.push(action.payload);
      // return state;
      return {
        data: state.data.concat(action.payload),
      };
    }
    default:
      return state;
  }
}

// Selectors


export function getMessages(state) {
  return state.messages.data;
}


// Action Creators


export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
}