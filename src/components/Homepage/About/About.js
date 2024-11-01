import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className="my-8 p-1">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
                        <Image className="w-[240px] h-[240px] md:w-[340px] md:h-[320px] lg:w-[460px] lg:h-[460px] rounded-lg shadow-lg" src="/assets/images/about_us/1.png" alt="" width={460} height={460} />
                        <Image className="ms-32 -mt-28 relative z-10 rounded-lg shadow-lg w-[160px] h-[160px] md:w-[200px] md:h-[200px] md:ms-40 md:-mt-40 lg:w-[330px] lg:h-[330px]  lg:ms-40 lg:-mt-56" src="/assets/images/about_us/2.png" alt="" width={330} height={330} />
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-primary font-bold text-xl">About Us</h4>
                        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold">We are qualified 
                            <br /> & of experience 
                            <br />in this field</h1>
                        <div className="">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <br />
                            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <button className="btn btn-primary btn-outline">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;