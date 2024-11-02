"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { TiSocialLinkedin } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';

const page = () => {
    const handelLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const res = await signIn('credentials', {
            email,
            password,
            redirect: false
        });
        if (res?.status === 200) {
            form.reset();
            toast.success("Login Successfully");
            redirect('/');
        };
    };
    return (
        <div className="hero min-h-screen my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid- gap-10 justify-items-center items-center">
                <div className="w-full hidden md:block">
                    <Image className="w-full" src="/assets/images/login/login.png" alt="" width={500} height={500} />
                </div>
                <div className="card w-full bg-base-100 shrink-0 border shadow-xl rounded-xl">
                    <form onSubmit={handelLogin} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                        <p className="text-center mt-3">Or Sign In with</p>
                    </form>
                    <div className="flex justify-center items-center gap-5 my-2">
                        <button className="btn btn-circle text-4xl">
                            <FcGoogle />
                        </button>
                        <button className="btn btn-circle text-4xl">
                            <TiSocialLinkedin className="text-[#0A66C2]" />
                        </button>
                        <button className="btn btn-circle text-4xl">
                            <FaFacebook className="text-[#1877F2]" />
                        </button>
                    </div>

                    <p className="text-center my-5">Have an account? <Link href="/signup" className="text-primary font-bold">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default page;