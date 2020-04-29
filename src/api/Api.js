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
    follow(userId){
        return instanceAPI.post(`follow/${userId}`)
            .then(responce => responce.data)
    },

    unfollow(userId){
        return instanceAPI.delete(`follow/${userId}`)
            .then(responce => responce.data)
    }
}

export const AuthAPI = {
    authMe(){
        return instanceAPI.get(`auth/me`)
            .then(responce => responce.data);
    },
}
