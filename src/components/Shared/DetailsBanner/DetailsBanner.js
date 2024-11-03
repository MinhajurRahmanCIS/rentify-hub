import React from 'react';

const DetailsBanner = ({ details }) => {
    const { title, img } = details || {};
    return (
        <div className="p-1 my-8">
            <div
                className="hero w-full h-[200px] md:h-[250px] "
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsBanner;