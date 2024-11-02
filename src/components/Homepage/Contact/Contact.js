import React from 'react';
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

const Contact = () => {
    return (
        <div className="container mx-auto bg-base-200 p-8 md:p-28 my-20 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-w">
                <TbCalendarTime className="text-6xl" />
                <div>
                    <p>We are open Saturday-Wednesday</p>
                    <h2 className="text-2xl font-bold">10:00 AM - 8:00 PM</h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-w">
                <MdOutlinePermPhoneMsg  className="text-6xl" />
                <div>
                    <p>Have a question?</p>
                    <h2 className="text-2xl font-bold">+8801234-567890</h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-w">
                <GrMapLocation  className="text-6xl" />
                <div>
                    <p>Need a repair? our address</p>
                    <h2 className="text-2xl font-bold">Dhaka, Bangladesh</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;