import Image from 'next/image';
import React from 'react';

const FeaturesCard = ({ feature, i }) => {
    const { _id, title } = feature || {};
    return (
        <div className={`flex flex-col justify-center items-center p-5 border space-y-4 rounded-xl ${_id === "03" && "bg-primary text-white"}`}>
            <Image src={`/assets/icons/${i + 1}.svg`} alt="" width={50} height={50} />
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
    );
};

export default FeaturesCard;