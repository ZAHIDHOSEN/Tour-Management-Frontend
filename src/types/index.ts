import type { ComponentType } from "react"

export type {ISendOTP,ILogin,IRegister,IVerifyOTP} from "./auth.type"




export interface IResponse<T> {
    statusCode:number,
    success:boolean,
    message:string,
    data:T
}


export interface ISidebarItem {
   title:string,
   items:{
    title:string,
    url:string,
    Component:ComponentType
   }[],
}

  
export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER"

