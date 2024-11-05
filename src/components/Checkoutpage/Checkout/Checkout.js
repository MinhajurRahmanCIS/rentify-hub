"use client"
import React, { useState } from 'react';
import { districts } from './DistrictsData';

const checkout = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [districtPrice, setDistrictPrice] = useState(0);

    const handelDistrictPrice = (e) => {
        const selectedDistrict = e.target.value;
        const district = districts.find(({ name }) => name === selectedDistrict);
        setDistrictPrice(district.price);
    };

    return (
        <form className="grid grid-cols-1 md:grid-cols-3 my-20 px-2">
            <div className="col-span-2 w-full ">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl border">
                    <div className="card-body w-full">
                        <h1 className="my-2 text-2xl font-bold">Fill the form</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Full Name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input
                                    type="number"
                                    name="number"
                                    placeholder="Enter You Mobile Number"
                                    className="input input-bordered w-full"
                                    required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">NID Number</span>
                                </label>
                                <input
                                    type="nid"
                                    placeholder="Enter You NID Number"
                                    className="input input-bordered w-full"
                                    required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of Birth</span>
                                </label>
                                <input
                                    type="date"
                                    placeholder="Enter Date of Birth"
                                    className="input input-bordered w-full"
                                    required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">District</span>
                                </label>

                                <select onChange={handelDistrictPrice} name="District" className="select select-bordered w-full">
                                    <option disabled selected>Select District</option>

                                    {
                                        districts.map(({ name, price }, i) =>
                                            <option
                                                key={i}
                                                value={name}
                                            >
                                                {name}
                                            </option>
                                        )
                                    }
                                </select>
                            </div>

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivery Address</span>
                            </label>
                            <textarea
                                type="text"
                                rows="3"
                                name="address"
                                placeholder="Enter Delivery Address"
                                className="textarea textarea-bordered textarea-lg w-full"
                                required />
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-span-1 mx-2 rounded-3xl p-2 bg-base-200">
                <h1 className="text-3xl font-bold px-5 pt-5">Payment Details</h1>
                <div className="divider divider-start"></div>
                <div className="flex justify-between items-center px-5">
                     <p>Delivery Charge</p>
                     <p><strong>$ </strong>{parseFloat(districtPrice).toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center px-5">
                     <p>Total</p>
                     <p><strong>$ </strong>{parseFloat(0)}</p>
                </div>
                <div className="form-control mt-5">
                    <button className="btn btn-primary">Order</button>
                </div>
            </div>

        </form>
    );
};

export default checkout;