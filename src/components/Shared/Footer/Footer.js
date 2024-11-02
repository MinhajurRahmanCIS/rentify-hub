import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
            <Image src="/assets/icons/logo.png" alt="logo" height={50} width={100} />
                <p>
                Rentify Hub
                    <br />
                    Providing reliable service since 2024
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Electronics</a>
                <a className="link link-hover">Automobile</a>
                <a className="link link-hover">Office Equipment</a>
                <a className="link link-hover">Home Appliances</a>
            </nav>
            <nav>
                <h6 className="footer-title">About us</h6>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;