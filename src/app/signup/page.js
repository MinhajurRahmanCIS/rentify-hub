"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { TiSocialLinkedin } from 'react-icons/ti';

const page = () => {
    const handelSignup = async () => {

    };
    return (
        <div className="hero min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid- gap-10 justify-items-center items-center">
                <div className="card w-full bg-base-100 shrink-0 border shadow-xl rounded-xl">
                    <form onSubmit={handelSignup} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Sing Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Full Name"
                                className="input input-bordered w-full"
                                required />
                        </div>
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
                            <button type="submit" className="btn btn-primary">Sing Up</button>
                        </div>

                        <p className="text-center mt-3">Or Sign Up with</p>
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

                    <p className="text-center my-5">Haven't an account? <Link href="/login" className="text-primary font-bold">Sign In</Link></p>
                </div>
                <div className="w-full hidden md:block">
                    <Image src="/assets/images/signup/signup.png" alt="" width={500} height={500} />
                </div>
            </div>
        </div>
    );
};

export default page;