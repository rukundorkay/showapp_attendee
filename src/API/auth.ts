import { Fetcher } from '../utils/Fetcher'

interface Credentials {
    email:string,
    names?: string,
    phone?: string,
    password?:string
}

export const UserSignup = (credentials:Credentials) => {
    return Fetcher(credentials,'/auth/attendee-register','POST')
}

export const UserLogin = (credentials:Credentials) => {
    return Fetcher(credentials,'/auth/login','POST')
}

export const UserForgotPassword = (credentials:Credentials) => {
    return Fetcher(credentials,'/auth/forgotpassword','POST')
}
