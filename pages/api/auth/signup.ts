// import { NextApiRequest, NextApiResponse } from "next";
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// interface Credentials {
//   email: string;
//   password: string;
//   role: string;
// }

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       async authorize(credentials: Credentials, req: NextApiRequest) {
//         try {
//           // Add logic to create a new user in your database
//           const newUser = {
//             email: credentials.email,
//             password: credentials.password, // Make sure to hash the password
//             role: credentials.role,
//           };

//           // Your logic to save the user to the database, for example, using MongoDB
//           // const savedUser = await yourDatabase.save(newUser);

//           // Return the user data (you may include the saved user ID)
//           return Promise.resolve(newUser);
//         } catch (error) {
//           console.error("Error creating user:", error);
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
// });
