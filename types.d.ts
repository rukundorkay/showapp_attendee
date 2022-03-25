import {Event} from './src/interfaces/event.interfaces';
import {Ticket} from './src/interfaces/ticket.interfaces';

export type RootStackParamList = {
  welcome: undefined;
  home: undefined;
  welcome: undefined;
  register: undefined;
  verification: undefined;
  BuyTicket: {event: object};
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
  TicketStatus: undefined;
};

interface ContextParams {
  authInfo?: User | null;
  isAuth: boolean;
  userToken: string;
  handlerUser: UsercontextHandler;
  handleInterests: UserInterestshandler;
  UserInterests: Interest[];
  setAuth: (type: boolean) => void;
  events: Event[];
  handleEvents: (events: Event[]) => void;
  tickets: Ticket[];
  handleTickets: (tickets: Ticket[]) => void;
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
