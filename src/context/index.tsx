import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import React, {createContext, useEffect, useState} from 'react';
import {ContextParams, User, Interest} from '../../types';
import {
  AddUser,
  DeleteUser,
  UpdateUser,
  AddInterests,
  RemoveInterest,
} from './Actions';

const initialContext: ContextParams = {
  authInfo: {name: 'kabundege', phone: '0788781384', email: 'Ibiz@gmail.com'},
  isAuth: false,
  UserInterests: [],
  handlerUser: (type: string, value: User) => {},
  handleInterests: (type: string, value: Interest[]) => Promise,
};

const StoreContext = createContext<ContextParams>(initialContext);

const StoreProvider: React.FC = ({children}) => {
  const [state, setState] = useState<ContextParams>(initialContext);

  useEffect(() => {
    //
    (async () => {
      // 1. Check Auth
      const user = await EncryptedStorage.getItem('userToken');
      // 2. Get Interests
      const interests = await AsyncStorage.getItem('userInterests');
      // 3. Sync with the context
      setState(prev => ({
        ...prev,
        isAuth: user ? true : false,
        UserInterests: interests ? JSON.parse(interests) : [],
      }));
    })();
  }, []);

  const handlerUser = (type: string, value: User) => {
    switch (type) {
      case AddUser:
        setState(prev => ({...prev, authInfo: value}));
        break;
      case UpdateUser:
        setState(prev => ({...prev, authInfo: value}));
        break;
      case DeleteUser:
        setState(prev => ({...prev, authInfo: null, isAuth: false}));
        break;
    }
  };

  const handleInterests = async (type: string, value: Interest[]) => {
    await new Promise((resolve, rej) => {
      switch (type) {
        case AddInterests:
          async () => {
            await AsyncStorage.setItem('userInterests', JSON.stringify(value));
            resolve(setState(prev => ({...prev, UserInterests: value})));
          };
          break;
        case RemoveInterest:
          async () => {
            await AsyncStorage.removeItem('userInterests');
            resolve(setState(prev => ({...prev, UserInterests: []})));
          };
          break;
      }
    });
  };

  const options = {
    ...state,
    handlerUser,
    handleInterests,
  };

  return (
    <StoreContext.Provider value={options}>{children}</StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
