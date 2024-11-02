"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { TiSocialLinkedin } from 'react-icons/ti';

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [buttonStatus, setButtonStatus] = useState(true);
    const handelSignup = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;
        const type = form.type.value;
        const confirmPassword = form.confirmPassword.value;
        setError("");

        if (password.length < 6) {
            return setError("length")
        }

        setError("");

        if (password !== confirmPassword) {
            return setError("not")
        }

        const newUser = {
            name,
            email,
            password,
            image,
            type
        };

        console.log(newUser)

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}signup/api`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })

        if (res.status === 200) {
            toast.success("User Created Successfully!")
            form.reset();
        }

        if (res.status === 500) {
            toast.error("Something Went Wrong?")
            form.reset();
        }

    };

    const handelTerms = (e) => {
        if (e.target.checked) {
            return setButtonStatus(false);
        }
        return setButtonStatus(true);
    }



    return (
        <div className="hero min-h-screen my-5">
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
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Enter Your Image URL"
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
                                <span className="label-text">Email</span>
                            </label>
                            <select name="type" className="select select-bordered w-full">
                                <option disabled >Select User Type</option>
                                <option value={"buyer"}>Buyer</option>
                                <option value={"seller"}>Seller</option>
                            </select>
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
                            {
                                error === "length" && <p className="text-error">Password length Must be 6 or longer</p>
                            }
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full"
                                required />
                            {
                                error === "not" && <p className="text-error">Password did not Matched!</p>
                            }
                        </div>

                        <div className="form-control">
                            <label className="label cursor-pointer ">
                                <span className="label-text flex items-center gap-2"><input onClick={handelTerms} type="checkbox" className="checkbox checkbox-primary" /> Do you Agree for Sign Up</span>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary" disabled={buttonStatus}>Sing Up</button>
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

                    <p className="text-center my-5">Have not an account? <Link href="/login" className="text-primary font-bold">Sign In</Link></p>
                </div>
                <div className="w-full hidden md:block">
                    <Image src="/assets/images/signup/signup.png" alt="" width={500} height={500} />
                </div>
            </div>
        </div>
    );
};

export default page;