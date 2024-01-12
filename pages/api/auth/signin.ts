// import { NextApiRequest, NextApiResponse } from "next";
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// interface Credentials {
//   email: string;
//   password: string;
// }

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       async authorize(credentials: Credentials, req: NextApiRequest) {
//         try {
//           // Add logic to validate user credentials (e.g., check against your database)
//           const user = {
//             id: 1,
//             email: credentials.email,
//             role: "customer",
//           };

//           // Your logic to verify the user's credentials, for example, using MongoDB
//           // const authenticatedUser = await yourDatabase.authenticate(credentials);

//           if (user) {
//             return Promise.resolve(user);
//           } else {
//             return Promise.resolve(null);
//           }
//         } catch (error) {
//           console.error("Error authenticating user:", error);
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
// });
