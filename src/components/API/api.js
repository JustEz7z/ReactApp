import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '5b348a29-db90-4fbe-9492-93f052897e20'
    }
})

export const userAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => {return response.data})
    },
    getUserFollow(userId){
        return instance.get(`follow/${userId}`)
    },
    postUserFollow(userId) {
        return instance.post(`follow/${userId}`)
    },
    deleteUserUnFollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const authAPI = {
    getAuthUser(){
        return instance.get('auth/me').then( response => {return response.data})
    },
    login(email, password, rememberMe){
        return instance.post('auth/login', {email: email, password: password, rememberMe: rememberMe, captcha: false})
    },
    logout(){
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getProfileUserID(userId){
        return instance.get(`profile/${userId}`).then( response => {return response.data})
    },
    getProfileUserStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    putProfileStatus(status){
        return instance.put(`profile/status/`, {status: status})
    },
}

