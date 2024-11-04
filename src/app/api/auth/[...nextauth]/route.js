import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

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
        }),

        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),

        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
        }),

        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
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
        },

        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === 'google' || 'github' || 'facebook') {
                const { name, email, image } = user;
                try {
                    const db = await connectDB();
                    const userCollection = await db.collection('users');
                    const userExist = await userCollection.findOne({ email });
                    if (!userExist) {
                        const res = await userCollection.insertOne(user);
                        return user;
                    }
                    else {
                        return user;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            else {
                return user;
            }
        },

    },
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST }