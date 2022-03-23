import { Fetcher } from '../utils/Fetcher'

export const UserSignup = (credentials:{}) => {
    return Fetcher(credentials,'/auth/attendee-register','POST')
}

export const UserLogin = (credentials:{}) => {
    return Fetcher(credentials,'/auth/login','POST')
}
