let initialState = {
    dialogs: [
        { id: 1, name: "Alik" },
        { id: 2, name: "Dasya" },
        { id: 3, name: "Sonya" },
        { id: 4, name: "Julia" },
        { id: 5, name: "Anna" },
        { id: 6, name: "Max" },
    ],
    message: [
        { id: 2, message: "Hello World!" },
        { id: 2, message: "Hi there" },
        { id: 2, message: "What is ur name?" },
        { id: 2, message: "Ohh yeah" },
        { id: 2, message: "Me?" },
        { id: 2, message: "Yes" },
    ]
}


const dialogReducer = (state = initialState , action) => {
  // Coping state

  switch (action.type) {
    case "Add-Message":
      let idCount = 1;
      for (let i of state.message) {
        idCount += 1;
      }
      let newMessage = { 
        id: idCount ,
        message: action.messageTextArea,
      };
      return {
        ...state,
        message: [...state.message, newMessage]
      }
    default:
      return {...state};
  }
};

export const addMessageActionCreator = (messageTextArea) => {
  return {
    type: "Add-Message",
    messageTextArea
  };
};

export default dialogReducer;
