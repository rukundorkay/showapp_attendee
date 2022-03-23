import {boolean} from 'yup';

export type RootStackParamList = {
  home: undefined;
  welcome: undefined;
  register: undefined;
  verification: undefined;
  BuyTicket: undefined;
  concert: {id: String};
  explore: undefined;
  filter: undefined;
  login: undefined;
  interest: undefined;
  forgotPassword: undefined;
  Profile: undefined
  navigate: (name: string) => void;
  goBack: () => void;
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
