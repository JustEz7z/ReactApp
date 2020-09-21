import profileReducer from './profileReducer'
import dialogReducer from "./dialogReducer";

let store = {
  _rerenderDOM() {
    console.log("Some text from store!");
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, its me Mario!", likes: 11 },
        { id: 2, message: "Hi, its me ssMario!", likes: 32 },
        { id: 3, message: "Hi, its me dsaMario!", likes: 23 },
      ],
      updatePostTextArea: "Some Text",
    },
    dialogPage: {
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
      ],
      updateMessageTextArea: "",
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observe) {
    this._rerenderDOM = observe;
  },
  dispatch(action) {
    // action = { type: 'some action', ...}
    this.getState().profilePage = profileReducer(this.getState().profilePage, action)
    this.getState().dialogPage = dialogReducer(this.getState().dialogPage, action)

    this._rerenderDOM(store)
  }
};

window.store = store;
export default store;
