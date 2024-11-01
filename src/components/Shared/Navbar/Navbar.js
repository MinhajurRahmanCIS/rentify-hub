import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    const menuItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]
    return (
        <div className="bg-base-200">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-0.5 ">
                            {
                                menuItems?.map(menu =>
                                    <li key={menu.path} ><Link className="font-semibold hover:text-primary" href={menu.path}>{menu.title}</Link></li>

                                )
                            }
                        </ul>
                    </div>
                    <Link href="/">
                        <Image src="/assets/icons/logo.png" alt="logo" height={40} width={80} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItems?.map(menu =>
                                <li key={menu.path} ><Link className="font-semibold hover:text-primary" href={menu.path}>{menu.title}</Link></li>

                            )
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <AiOutlineShoppingCart className="text-2xl hover:text-primary"/>
                    <AiOutlineSearch  className="text-2xl hover:text-primary"/>
                    <a className="btn btn-primary btn-outline px-8">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;