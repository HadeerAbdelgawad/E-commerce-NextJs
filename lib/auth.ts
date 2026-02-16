import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"

const authconfig={
    providers:[
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string


        }),
        FacebookProvider({
            clientId: process.env.AUTH_FACEBOOK_ID as string,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET as string

        })
    ],
    callbacks:{
        authorized:async({auth,request})=>{
            return !! auth?.user
        }
    },
    page:{
        signIn:"/signin"
    }
}



export const {auth , signIn , handlers:{GET , POST}}= NextAuth(authconfig);

