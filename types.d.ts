import {boolean} from 'yup';

export type RootStackParamList = {
  welcome: undefined;
  home: undefined;
  BuyTicket: undefined;
  login: undefined;
  interest: undefined;
  forgotPassword: undefined;
  Profile: undefined
  register: undefined;
  verification: undefined;
  navigate: (name: string) => void;
  goBack: () => void;
};

interface ContextParams {
  authInfo?: User | null;
  isAuth: boolean;
  handlerUser: UsercontextHandler;
  handleInterests: UserInterestshandler;
  UserInterests: Interest[]
}

type UserContexhandler = (type: string, value: User) => void;
type UserInterestshandler = (type: string, value: Interest[]) => Promise;

interface User {
  name: string;
  phone: string;
  email: string;
}

interface Interest {
  image: ImageSourcePropType;
  title: string;
  status: boolean;
}
