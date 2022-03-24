export type RootStackParamList = {
  welcome: undefined;
  home: undefined;
  welcome: undefined;
  register: undefined;
  verification: undefined;
  BuyTicket: undefined;
  TicketBought: undefined;
  concert: {id: String};
  explore: undefined;
  filter: undefined;
  login: undefined;
  interest: undefined;
  forgotPassword: undefined;
  Profile: undefined;
  navigate: (name: string) => void;
  goBack: () => void;
};

interface ContextParams {
  authInfo?: User | null;
  isAuth: boolean;
  handlerUser: UsercontextHandler;
  handleInterests: UserInterestshandler;
  UserInterests: Interest[];
  setAuth: (type:boolean) => void
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
