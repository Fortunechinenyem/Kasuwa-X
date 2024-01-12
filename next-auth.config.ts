import { NextAuthConfig } from "next-auth";
import { Google } from "next-auth/providers";

const config: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers as needed (e.g., GitHub, Facebook)
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: null, // Will use the default
  },
  callbacks: {
    // Add callback functions as needed
  },
};

export default config;
