import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';

const SocialSignIn = () => {
    const session = useSession();
    const handelSocialLogin = async (provider) => {
        const res = await signIn(provider, { redirect: false });
    };

    if (session.status === "authenticated") {
        redirect('/');
    };

    return (
        <div className="flex justify-center items-center gap-5 my-2">
            <button onClick={() => handelSocialLogin('google')} className="btn btn-circle text-4xl">
                <FcGoogle />
            </button>

            <button onClick={() => handelSocialLogin('github')} className="btn btn-circle text-4xl">
                <GrGithub className="" />
            </button>

            <button onClick={() => handelSocialLogin('facebook')} className="btn btn-circle text-4xl">
                <FaFacebook className="text-[#1877F2]" />
            </button>
        </div>
    );
};

export default SocialSignIn;