"use server"
import { sessionOptions, SessionData } from "lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const getSession = async() =>{
    
    const session = await getIronSession<SessionData>(cookies(),sessionOptions);

    if(!session.isLoggedIn){
        
    }

    return session;
}
export const login = async() =>{
    
}
export const Logout = async() =>{
    
}