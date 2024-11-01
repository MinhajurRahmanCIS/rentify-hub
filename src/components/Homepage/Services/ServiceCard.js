import Image from 'next/image';
import React from 'react';

const ServiceCard = ({service}) => {
    const {title, price, img, category, subcategory, brand, condition} = service || {};
    return (
        <div className="card border">
            <figure className="">
                <Image
                    src={img}
                    alt="Shoes"
                    className="rounded-xl w-full h-[350px] " height={300} width={300} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><strong>Category: </strong> {category}</p>
                <p><strong>Price: </strong> {price}</p>
                <p><strong>Condition: </strong> {condition}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Rent Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;