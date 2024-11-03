import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({service}) => {
    const {_id, title, price, img, category, subcategory, brand, condition} = service || {};
    return (
        <div className="card border hover:bg-base-200">
            <figure className="">
                <Image
                    src={img}
                    alt="Shoes"
                    className="rounded-t-xl w-full h-[350px] hover:opacity-90" height={300} width={300} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><strong>Category: </strong> {category}</p>
                <p><strong>Price: </strong> {price} <span className="badge badge-accent text-white font-bold">Monthly</span></p>
                <p><strong>Condition: </strong> {condition}</p>
                <div className="card-actions justify-end">
                    <Link href={`/services/${_id}`} className="btn btn-primary">View</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;