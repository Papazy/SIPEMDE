// pages/api/auth/[...nextauth].ts
import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";

// import { credentialsProvider } from '@/lib/auth'; // Ensure to have your authentication module path
// import { CredentialsProvider } from 'next-auth/providers';
// import { PrismaClient } from '@prisma/client';
// import { db } from './db';
// const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Credentials({
      type: "credentials",
      name: "Credentials",
      credentials: {
        nik: { label: "Nik", type: "text" },
        password: { label: "Password", type: "text" },
      },
      async authorize(credentials) {
        const user = await db.user.findFirst({
          where: {
            nik: credentials?.nik,
          },
        });
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, account, user }) {
      if (account?.provider === "credentials") {
        token.nik = user.nik;
      }
      return token;
    },
    async session({ session, token }) {
      if ("nik" in token) {
        session.user.nik = token.nik;
      }
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
// export default authOptions;

// import { PrismaAdapter } from '@next-auth/prisma-adapter'
// import { nanoid } from 'nanoid'
// import { NextAuthOptions, getServerSession } from 'next-auth'
// import NextAuth from 'next-auth/next'
// import Credentials from 'next-auth/providers/credentials'
// import GoogleProvider from 'next-auth/providers/google'
// import { promisify } from 'util'
// import { CredentialsProvider } from 'next-auth/providers'

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(db),
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/sign-in',
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     })
//   ],
//   callbacks: {
//     async session({ token, session }) {
//       if (token) {
//         session.user.id = token.id
//         session.user.name = token.name
//         session.user.email = token.email
//         session.user.image = token.picture
//         session.user.username = token.username
//       }

//       return session
//     },

//     async jwt({ token, user }) {
//       const dbUser = await db.user.findFirst({
//         where: {
//           email: token.email,
//         },
//       })

//       if (!dbUser) {
//         token.id = user!.id
//         return token
//       }

//       if (!dbUser.username) {
//         await db.user.update({
//           where: {
//             id: dbUser.id,
//           },
//           data: {
//             username: nanoid(10),
//           },
//         })
//       }

//       return {
//         id: dbUser.id,
//         name: dbUser.name,
//         email: dbUser.email,
//         picture: dbUser.image,
//         username: dbUser.username,
//       }
//     },
//     redirect() {
//       return '/'
//     },
//   },
// }

// export default NextAuth({
//   adapter: PrismaAdapter(db),
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/sign-in',
//   },
//   providers: [
//     Credentials({
//       name: 'Credentials',
//       credentials: {
//         nik: { label: 'Nik', type: 'text' },
//         password: { label: 'Password', type: 'text' },
//       },
//       authorize: async (credentials) => {
//         // const query = promisify(db.query).bind(db);
//         // const { nik, password} = credentials;
//         const user = await db.user.findFirst({
//           where: {
//             nik: credentials?.nik,
//             password: credentials?.password,
//           },
//         })

//         if (!user) {
//           throw new Error('No user found')
//         }

//         if (user.password !== credentials.password) {
//           throw new Error('Incorrect password')
//         }

//         return {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           image: user.image,
//           username: user.username,
//         }
//       },

//     })
//   ]
// })
