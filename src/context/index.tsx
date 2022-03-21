import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import React , { createContext, useEffect, useState } from 'react';
import { ContextParams, User } from '../../types';
import { AddUser, DeleteUser, UpdateUser } from './Actions';

const initialContext = { authInfo:{ name:"kabundege" }, isAuth:false }

const StoreContext = createContext<ContextParams>(initialContext);

const StoreProvider:React.FC = ({ children }) => {
    const [ state, setState ] = useState<ContextParams>(initialContext)

    useEffect(()=>{
        // 1. Check Auth
        (async()=>{
            const user = await EncryptedStorage.getItem('userToken')
            setState(prev => ({ ...prev,isAuth: user ? true : false }))
        })()
    },[])

    const handlerUser = (type:string,value:User) => {
        switch(type){
            case AddUser:
                setState(prev => ({ ...prev,authInfo:value }))
            case UpdateUser:
                setState(prev => ({ ...prev,authInfo:value }))
            case DeleteUser:
                setState(prev => ({ ...prev,authInfo:null }))
        }
    }

    const options = { 
        ...state, 
        handlerUser 
    }

    return (
        <StoreContext.Provider value={options}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext,StoreProvider }
