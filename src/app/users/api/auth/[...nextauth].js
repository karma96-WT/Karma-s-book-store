import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; // or your provider

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this with your login logic
        if (credentials.email === "admin@test.com" && credentials.password === "admin") {
          return { id: 1, name: "Admin", email: "admin@test.com" };
        }
        return null;
      },
    }),
  ],
  // Optional session/callback configs
});
