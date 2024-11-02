import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
    return (
        <div className="my-28">
            <div className="text-center space-y-4">
                <h4 className="text-primary font-bold text-xl">Testimonial</h4>
                <h1 className="text-4xl font-bold">What Customer Says</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomized <br />words which don not look even slightly believable. </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 p-1">
                <div className="border p-10 rounded-lg">
                    <div className="flex items-center gap-5">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                                <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg" alt="" width={1000} height={1000} />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-2xl font-semibold">Brad Jonas</h1>
                            <p>Salesman</p>
                        </div>
                    </div>

                    <p className="my-5 text-w">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>

                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" disabled />
                    </div>
                </div>
                <div className="border p-10 rounded-lg">
                    <div className="flex items-center gap-5">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                                <Image className="" src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?fm=jpg" alt="" width={1000} height={1000} />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-2xl font-semibold">Edward Ken</h1>
                            <p>Businessman</p>
                        </div>
                    </div>

                    <p className="my-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>

                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" disabled />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                             />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" disabled />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;