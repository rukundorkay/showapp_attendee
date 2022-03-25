import EncryptedStorage from 'react-native-encrypted-storage';
import {BaseUrl} from './env';

export const controller = new AbortController();

export const Fetcher = async (
  Body?: {},
  url: string,
  method: 'GET' | 'POST' | 'PATCH',
) => {
  const {signal} = controller;
  const token = await EncryptedStorage.getItem('userToken');

  const headers: HeadersInit_ = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) headers['Authorization'] = `Bearer ${token}`;

  const result = await fetch(BaseUrl + url, {
    headers,
    method,
    signal,
    body: JSON.stringify(Body),
  })
    .then(async res => {
      const result = await res.json();
      const success = String(res.status).startsWith('2') ? true : false;
      return {
        ...result,
        success,
      };
    })
    .catch(({message}) => ({message}));

  return result;
};
