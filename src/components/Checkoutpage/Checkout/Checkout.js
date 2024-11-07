"use client"
import React, { useState } from 'react';
import { districts } from './DistrictsData';
import { useSession } from 'next-auth/react';

const checkout = ({ id, details }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [terms, setTerms] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const session = useSession();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [districtPrice, setDistrictPrice] = useState(0);

    const handleDistrictPrice = (e) => {
        const selectedDistrict = e.target.value;
        const district = districts.find(({ name }) => name === selectedDistrict);
        setDistrictPrice(district.price);
    };

    const months = id[1];
    const quantity = id[2];
    const subtotal = details.price * id[2] * id[1];
    const total = subtotal + districtPrice;

    const handelTerms = (e) => {
        if (e.target.checked) {
            return setTerms(false);
        }
        return setTerms(true);
    }

    const handelBooking = (e) => {
        e.preventDefault();
        console.log("ok")
    }


    return (
        <div className="my-20 px-2">
            <form onSubmit={handelBooking} className="grid grid-cols-1 md:grid-cols-3">
                {/* Form Section */}
                <div className="col-span-2 w-full mb-10 md:mb-0">
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
                                        placeholder="Enter Your Mobile Number"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">NID Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="nid"
                                        placeholder="Enter Your NID Number"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="dob"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">District</span>
                                    </label>
                                    <select
                                        onChange={handleDistrictPrice}
                                        name="district"
                                        className="select select-bordered w-full"
                                        required
                                    >
                                        <option disabled selected>Select District</option>
                                        {districts.map(({ name, price }, i) => (
                                            <option key={i} value={name}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Delivery Address</span>
                                </label>
                                <textarea
                                    name="address"
                                    rows="3"
                                    placeholder="Enter Delivery Address"
                                    className="textarea textarea-bordered textarea-lg w-full"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Details Section */}
                <div className="col-span-1 mx-2 rounded-3xl p-2 bg-base-200">
                    <h1 className="text-3xl font-bold px-5 pt-2">Payment Details</h1>
                    <div className="divider divider-start"></div>
                    <div className="flex justify-between items-center px-5">
                        <p>Price</p>
                        <p><strong>$ </strong>{parseFloat(details.price || 0).toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between items-center px-5">
                        <p>Quantity</p>
                        <p className="badge badge-primary text-white font-bold">{quantity}</p>
                    </div>

                    <div className="flex justify-between items-center px-5">
                        <p>Months</p>
                        <p className="badge badge-info text-white font-bold">{months}</p>
                    </div>

                    <div className="flex justify-between items-center px-5">
                        <p>Subtotal</p>
                        <p><strong>$ </strong>{parseFloat(subtotal).toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between items-center px-5">
                        <p>Delivery Charge</p>
                        <p><strong>$ </strong>{parseFloat(districtPrice || 0).toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between items-center px-5">
                        <p>Tax</p>
                        <p><strong>$ </strong>00.00</p>
                    </div>

                    <div className="divider divider-start"></div>

                    <div className="flex justify-between items-center px-5">
                        <p>Total</p>
                        <p><strong>$ </strong>{parseFloat(total).toFixed(2)}</p>
                    </div>

                    <p className="text-center font-bold text-error mt-4">
                        Please make a payment of <span className="text-black font-bold bg-white px-1">$ {parseFloat(total).toFixed(2)}</span> BDT through bKash to this number: <span className="text-black font-bold bg-white px-1 ">(+880)012345678901</span>
                    </p>


                    <div className="form-control mt-2">
                        <input
                            type="text"
                            name="transactionID"
                            placeholder="Enter Your Transaction Number"
                            className="input input-bordered w-full input-sm rounded-none"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label flex items-center gap-2">
                            <input onClick={handelTerms} type="checkbox" className="checkbox checkbox-success" />
                            <span className="label-text ">
                                I have read and agree to these terms by making the payment for the rental service.
                                </span>
                        </label>
                    </div>
                    <span className="text-error px-2 font-bold"> Note: <span className="font-semibold">No Refund Policy!</span></span>
                    <div className="form-control mt-3">
                        <button type="submit" className="btn btn-primary" disabled={terms}>Order</button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default checkout;