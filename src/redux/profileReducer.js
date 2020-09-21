import {profileAPI} from './../components/API/api'

let initialState = {
    posts: [
        { id: 1, message: "Hi, its me Mario!", likes: 11 },
        { id: 2, message: "Hi, its me ssMario!", likes: 32 },
        { id: 3, message: "Hi, its me dsaMario!", likes: 23 },
    ],
    linkProfileId: 1,
    profile: null,
    profileStatus: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case "Add-Post":
      let idCount = 1;
      for (let i of state.posts) {
        idCount += 1;
      }
      let newPost = {
        id: idCount,
        message: action.messagePostTextArea,
        likes: idCount,
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    case 'Set_Profile':
      return{
        ...state,
        profile: action.profile
      }
    case "Set_Profile_Status":
      return {
        ...state,
        profileStatus: action.status
      }
    default:
      return {...state};
  }
};

export const addPostActionCreator = (messagePostTextArea) => {
  return { type: "Add-Post", messagePostTextArea};
};

export const setProfile = (profile) => { // profile = {...}
  return { type: "Set_Profile", profile };
};
export const setProfileStatus = (status) => {
  return { type: "Set_Profile_Status", status };
};
export const setProfileThunk = (userId, authId, authStatus) => (dispatch) => {
        profileAPI.getProfileUserID(userId).then((data) => {
            dispatch(setProfile(data))
            profileAPI.getProfileUserStatus(userId).then(response => dispatch(setProfileStatus(response.data)))
      })
      .catch(err => { 
        profileAPI.getProfileUserID(authId).then(data => {
          dispatch(setProfile(data))
          dispatch(setProfileStatus(authStatus))
        })
      })     
}
export default profileReducer;
