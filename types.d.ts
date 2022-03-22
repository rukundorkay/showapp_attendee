import { boolean } from "yup";

export type RootStackParamList = {
    home: undefined;
    login: undefined;
    interest: undefined;
    forgotPassword: undefined;
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

interface Interest { image:ImageSourcePropType,title:string,status:boolean }
