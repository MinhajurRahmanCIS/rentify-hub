"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { LiaPlusSquareSolid, LiaMinusSquareSolid } from "react-icons/lia";


const ServiceDetails = ({ details }) => {
    const [total, setTotal] = useState("00.00");
    const [quantity, setQuantity] = useState(1);
    const [status, setStatus] = useState(true);
    const { _id, title, img, description, brand, category, configuration, condition, facility, price } = details || {};

    const handelTotalPrice = (e) => {
        setTotal(e.target.value * parseFloat(price));
        setStatus(false);
    };

    const handelIncrement = () => {
        const currentQuantity = quantity + 1;
        setQuantity(currentQuantity);
    }

    const handelDecrement = () => {
        const currentQuantity = quantity - 1;
        setQuantity(currentQuantity);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 my-20">
            <div className="col-span-2 mx-2">

                <Image className="w-full h-[450px] rounded-xl shadow-xl" src={img} alt="" width={1000} height={300} />

                <div className="my-10 space-y-4">
                    <h1 className="text-4xl font-bold">{brand} {title} Details</h1>
                    <p className="text-justify text-slate-600">{description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo molestias excepturi, ratione, facere labore facilis odio enim iusto consequatur dignissimos explicabo eius ipsum. Vel natus, unde mollitia asperiores sapiente doloremque laudantium quos velit dolore eum. Ipsam exercitationem, dolor repudiandae sequi debitis deserunt ipsum temporibus magni, ad neque dolorum autem corrupti?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                    {
                        facility?.map(({ name, details }, i) =>
                            <div key={i} className="border-t-2 border-primary rounded-lg space-y-2 px-10 py-5 bg-base-200">
                                <h1 className="text-2xl font-bold">{name}</h1>
                                <p className="text-justify">{details} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus autem quam rem ipsum debitis ipsam veniam repellat esse architecto dicta aut, dolores iure sint quos illum ex! Dolores, odio ipsam?</p>
                            </div>
                        )
                    }
                </div>



            </div>
            <div className="col-span-1 mx-2">
                <ul className="menu menu-md bg-base-200 rounded-box">
                    <h1 className="text-2xl font-bold px-5 my-2">Specification</h1>
                    <li ><a><strong>Brand :</strong> {brand}</a></li>
                    {
                        configuration?.map(({ option, value }, i) =>
                            <li key={i}>
                                <a><strong>{option} :</strong> {value}</a>
                            </li>
                        )
                    }
                    <li ><a><strong>Condition :</strong> {condition}</a></li>
                </ul>

                <div className="flex flex-col gap-5 my-10">
                    <h1 className="text-3xl font-bold">Price: ${price}</h1>
                    <select onChange={handelTotalPrice} name="month" className="select select-bordered w-full ">
                        <option disabled selected>How Many Month</option>
                        <option value={3}>3 Months</option>
                        <option value={6}>6 Months</option>
                        <option value={9}>9 Months</option>
                        <option value={12}>12 Months</option>
                        <option value={15}>15 Months</option>
                        <option value={18}>18 Months</option>
                        <option value={21}>21 Months</option>
                        <option value={24}>24 Months</option>
                    </select>
                </div>

                <div className="flex justify-end items-center gap-5">
                    <button onClick={handelIncrement} className="btn btn-circle btn-outline btn-success"> <LiaPlusSquareSolid className="font-bold text-2xl" /> </button>

                    <span className="font-bold text-xl">{quantity}</span>

                    <button onClick={handelDecrement} className="text-white btn btn-circle btn-outline btn-error " disabled={quantity === 1}> <LiaMinusSquareSolid className="font-bold text-2xl" /> </button>
                </div>

                <h1 className="text-3xl font-bold text-end my-5">Total: ${total * quantity}</h1>

                <Link href={`/checkout/${_id}`} className="btn btn-primary w-full my-5" disabled={status}>Proceed Checkout</Link>

            </div>

        </div>
    );
};

export default ServiceDetails;