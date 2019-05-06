let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Blabla", likesCount: 11 },
        { id: 4, message: "Dada", likesCount: 11 }
      ],
      newPostText: "поле ввода"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your " },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" }
      ],
      newMessagesText: "поле ввода"
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State chhanged");
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = " ";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGES") {
      let newMessages = {
        id: 6,
        message: this._state.dialogsPage.newMessagesText
      };
      this._state.dialogsPage.messages.push(newMessages);
      this._state.dialogsPage.newMessagesText = " ";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGES-TEXT") {
      this._state.dialogsPage.newMessagesText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreat = () => {
  return {
    type: "ADD-POST"
  };
};

export const onPostChangeActionCreat = text => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
  };
};

export const addMessagesActionCreat = () => {
  return {
    type: "ADD-MESSAGES"
  };
};
export const onMessagesChangeActionCreat = text => {
  return {
    type: "UPDATE-NEW-MESSAGES-TEXT",
    newText: text
  };
};

export default store;
