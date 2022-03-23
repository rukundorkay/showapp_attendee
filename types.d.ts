import {boolean} from 'yup';

export type RootStackParamList = {
  home: undefined;
  BuyTicket: undefined;
  login: undefined;
  interest: undefined;
  forgotPassword: undefined;
  Profile: undefined
};

interface ContextParams {
  authInfo?: User | null;
  isAuth: boolean;
  handlerUser?: contextHandler;
}

type Contexhandler = (type: string, value: User) => void;

interface User {
  name: string;
  phone: number;
  email: string;
}

interface Interest {
  image: ImageSourcePropType;
  title: string;
  status: boolean;
}
