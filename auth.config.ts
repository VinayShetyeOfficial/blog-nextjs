<<<<<<< HEAD
import NextAuth from "next-auth"
import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";


export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);


=======
import NextAuth from "next-auth"
import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";


export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);


>>>>>>> 5c64806be0cf1150f7df0a62bd2f159fe0783a15
