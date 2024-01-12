// // pages/api/auth/[...nextauth].ts
// import { NextApiRequest, NextApiResponse } from "next";
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // Add other providers as needed (e.g., GitHub, Facebook)
//   ],
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error",
//     verifyRequest: "/auth/verify-request",
//     newUser: null, // Will use the default
//   },
//   callbacks: {
//     // Add callback functions as needed
//   },
// });
