import {authAPI , profileAPI} from '../components/API/api'

let initial = {
    user: {
        id: null,
        login: null,
        email: null
    },
    status: '',
    isAuth: false
}

const authReducer = (state = initial, action) => {
    switch(action.type){
        case 'setAuthUser':
            return {
                ...state,
                user: {...action.userAuth},
                isAuth: true
            }
        case 'set_Auth_Users_Status':
            return {
                ...state,
                status: action.status
            }
        case 'logout': 
            return {
                user: {
                    id: null,
                    login: null,
                    email: null
                },
                status: '',
                isAuth: false
            }
        default:
            return {...state}
    }
}

export const setAuthUser = (userAuth) => ({type: 'setAuthUser', userAuth})

export const setAuthUsersStatus = (status) => ({type: 'set_Auth_Users_Status', status})

export const actionLogout = () => ({type: 'logout'})

export const getAuthUser = () => (dispatch) => {
    authAPI.getAuthUser().then(data => {
        if(!data.resultCode){
          dispatch(setAuthUser(data.data))
          profileAPI.getProfileUserStatus(data.data.id).then(response => {
            dispatch(setAuthUsersStatus(response.data))
          })
        }
    })
}

export const putAuthUsersStatus = (status) => (dispatch) => {
    profileAPI.putProfileStatus(status).then(response => console.log(response.data))
}

export const authorithation = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if(!response.data.resultCode){
            dispatch(getAuthUser())
        }
        console.log(response)
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        console.log(response)
        dispatch(actionLogout())
    })
}

export default authReducer