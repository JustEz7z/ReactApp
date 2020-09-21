import {userAPI} from '../components/API/api'

let initial = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  page: 1,
  isFetching: false,
  isActionFollowing: []
};

const usersReducer = (state = initial, action) => {
  switch (action.type) {
    case "follow":
      return {
        ...state,
        users: state.users.map((user) => {
          if (action.userId === user.id) {
            return {
              ...user,
              followed: !user.followed,
            };
          }
          return user;
        }),
      };
    case "setUsers":
      return {
        ...state,
        users: [...action.newUsers],
      };
    case "setUsersTotalCount":
      return {
        ...state,
        totalUsersCount: action.count
      }
    case 'setNumberPage':
      return {
          ...state,
          page: action.numberPage
        }
    case 'setFetching':
      return{
        ...state,
        isFetching: action.isFetching
      }
    case 'setIsActionFollowing':
      return {
        ...state,
        isActionFollowing: [...state.isActionFollowing, action.userId]
      }
    case 'setIsActionUnFollowing': 
      return {
        ...state,
        isActionFollowing: [state.isActionFollowing.filter((id) => id !== action.userId)]
      }
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({
  type: "follow",
  userId: userId,
});
export const setUsersActionCreator = (newUsers) => ({
  type: "setUsers",
  newUsers: newUsers,
});
export const totalUsersCountActionCreator = (count) => ({
  type: "setUsersTotalCount",
  count: count
});
export const setNumberPageActionCreator = (numberPage) => ({
  type: "setNumberPage",
  numberPage: numberPage
});
export const setFetchingActionCreator = (isFetching) => ({
  type: "setFetching",
  isFetching
});
export const setActionFollow = (userId) => ({
  type: "setIsActionFollowing",
  userId
});
export const setIsActionUnFollowing = (userId) => ({
  type: "setIsActionUnFollowing",
  userId
});


export const getUsersThunk = (page, pageSize) => (dispatch) => {
    dispatch(setFetchingActionCreator(true))
    userAPI.getUsers(page, pageSize).then(data => {
        dispatch(setFetchingActionCreator(false))
        dispatch(setUsersActionCreator(data.items))
        dispatch(totalUsersCountActionCreator(data.totalCount))
      });
}

export const onPageChanged = (p, pageSize) => (dispatch) => {
  dispatch(setNumberPageActionCreator(p))
  dispatch(setFetchingActionCreator(true))
  userAPI.getUsers(p, pageSize).then((data) => {
      dispatch(setFetchingActionCreator(false))
      dispatch(setUsersActionCreator(data.items))
    });
}

export const deleteUserFollow = (userId) => (dispatch) => {
  dispatch(setActionFollow(userId))
  userAPI.deleteUserUnFollow(userId).then(response => { 
    dispatch(followActionCreator(userId)) 
    dispatch(setIsActionUnFollowing(userId))
  })
}
export const postUserFollow = (userId) => (dispatch) => {
  dispatch(setActionFollow(userId))
  userAPI.postUserFollow(userId).then(response => { 
    dispatch(followActionCreator(userId))
    dispatch(setIsActionUnFollowing(userId))
  })
}

export default usersReducer;
