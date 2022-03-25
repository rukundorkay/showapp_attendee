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
import {Event} from '../interfaces/event.interfaces';
import {Ticket} from '../interfaces/ticket.interfaces';

const initialContext: ContextParams = {
  authInfo: {name: 'kabundege', phone: '0788781384', email: 'Ibiz@gmail.com'},
  isAuth: false,
  UserInterests: [],
  handlerUser: (type: string, value: User) => {},
  handleInterests: (type: string, value: Interest[]) => Promise,
  setAuth: () => {},
  events: [],
  handleEvents: () => {},
  tickets: [],
  handleTickets: () => {},
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
        EncryptedStorage.removeItem('userToken')
        .then(() => setState(prev => ({...prev, authInfo: null, isAuth: false})))
        break;
    }
  };

  const handleInterests = async (type: string, value: Interest[]) => {
    return new Promise((resolve, rej) => {
      switch (type) {
        case AddInterests:
          (async () => {
            await AsyncStorage.setItem('userInterests', JSON.stringify(value));
            resolve(setState(prev => ({...prev, UserInterests: value})));
          })();
          break;
        case RemoveInterest:
          (async () => {
            await AsyncStorage.removeItem('userInterests');
            resolve(setState(prev => ({...prev, UserInterests: []})));
          })()
          break;
      }
    });
  };

  const setAuth = (type: boolean) => {
    setState(prev => ({...prev, isAuth: type}));
  };

  const handleEvents = (events: Event[]) => {
    setState(prev => ({...prev, events}));
  };

  const handleTickets = (tickets: Ticket[]) => {
    setState(prev => ({...prev, tickets}));
  };

  const options = {
    ...state,
    handlerUser,
    handleInterests,
    setAuth,
    handleEvents,
    handleTickets,
  };

  return (
    <StoreContext.Provider value={options}>{children}</StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
