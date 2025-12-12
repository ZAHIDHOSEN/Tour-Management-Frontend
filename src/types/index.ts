export type {ISendOTP,ILogin,IRegister,IVerifyOTP} from "./auth.type"




export interface IResponse<T> {
    statusCode:number,
    success:boolean,
    message:string,
    data:T
}