export type RootStackParamList = {
  home: undefined;
  RegistrationScreen: undefined;
  VerificationScreen: undefined;
  navigate: (name:string)=> void;
  goBack: () => void
};

interface ContextParams {
  authInfo?: User | null;
  isAuth: boolean;
  handlerUser?: contextHandler;
}

type Contexhandler = (type: string, value: User) => void;

interface User {
  name: string;
}
