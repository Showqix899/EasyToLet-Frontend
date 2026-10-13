import api from "./axios";


//user registaration api
export const registerUser = async (formData) => {
    const {data} = await api.post('/auth/register',formData)
    return data
}

//user login api cal 
export const loginUser = async (credentials) => {
    const {data} = await api.post('auth/login',credentials)
    return data
}

//verify email account api 
export const verifyEmail = async (token) =>{
    const {data} = await api.get(`/auth/verify-email/${encodeURIComponent(token)}`)
    return data
}


