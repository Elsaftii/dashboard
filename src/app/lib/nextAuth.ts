
import { type AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions :AuthOptions = {
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization:{
                params:{
                    prompt: "consent",
                    access_type : "offline",
                    response_type: 'code'
                }
            }

        })
    ],
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/error',
    },
    callbacks: {
        async session({ session, token, user }) {
          session.user = token.user as any
          return session;
        },
        async jwt({ token, user, trigger, session }) {
          if (user) {
            token.user = user;
          }
          // ***************************************************************
          // added code
          if (trigger === "update" && session) {
            token = {...token, user : session}
            return token;
          };
           // **************************************************************
          return token;
        },
      },
 }
 export default NextAuth(authOptions)
