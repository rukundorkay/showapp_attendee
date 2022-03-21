export type RootStackParamList = {
    home: undefined;
  };

interface ContextParams {
  authInfo?: User| null,
  isAuth: boolean,
  handlerUser?: contextHandler
}

type Contexhandler = (  type: string,value: User) => void

interface User {
  name:string
}
  