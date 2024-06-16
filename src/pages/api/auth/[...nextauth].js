import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // Add a secret to enable encrypted cookies and secure sessions
  secret: process.env.NEXTAUTH_SECRET,
  // Optional: Define additional NextAuth.js options here
};

export default NextAuth(authOptions);
