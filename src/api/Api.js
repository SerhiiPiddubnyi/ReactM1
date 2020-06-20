import * as axios from "axios";

const instanceAPI = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '62005d27-039f-4c86-85d5-445b3f38c01d'
    }
});

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data);
    },
}

export  const  FollowAPI =  {
    following(userId, type){
        if (type === "follow") {
            return instanceAPI.post(`follow/${userId}`)
                .then(responce => responce.data)
        }

        return instanceAPI.delete(`follow/${userId}`)
            .then(responce => responce.data)
    },
}

export const AuthAPI = {
    authMe(){
        return instanceAPI.get(`auth/me`)
            .then(responce => responce.data);
    },
    login(email, password, rememberMe = null){
        return instanceAPI.post(`auth/login`, { email, password, rememberMe })
            .then(responce => responce.data);
    },
    logout(){
        return instanceAPI.delete(`auth/login`)
            .then(responce => responce.data);
    },
}

export const ProfileAPI = {
    getProfile(userId){
        return instanceAPI.get(`profile/${userId}`)
            .then(responce => responce.data);
    },

    getStatus(userId){
        return instanceAPI.get(`profile/status/${userId}`)
            .then(responce => responce.data);
    },

    updateStatus(status){
        return instanceAPI.put(`profile/status`, {status : status})
            .then(responce => responce.data);
    },

}

