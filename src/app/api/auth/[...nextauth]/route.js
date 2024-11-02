import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 3600 * 23 * 60 * 60
    },
    providers: [
        CredentialProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {

                const { email, password } = credentials;

                if (!email || !password) {
                    return null;
                };

                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ email });

                if (!currentUser) {
                    return null;
                };

                const passwordMatched = bcrypt.compareSync(password, currentUser.password);

                if (!passwordMatched) {
                    return null;
                };

                return currentUser;
            }
        })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }

            return token;
        },
        
        async session({ session, token }) {
            session.user.type = token.type

            return session;
        }
    },
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST }