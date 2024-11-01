import React from 'react';
import { bannersData } from './BannerData';

const Banner = () => {
    return (
        <div className="container mx-auto p-1">
            <div className="carousel w-full mt-8">
                {
                    bannersData?.map((banner, i) =>
                        <div
                            key={i}
                            id={`slide${i + 1}`}
                            className={`carousel-item relative w-full h-[300px] md:h-[550px] rounded-xl`}
                            style={{
                                backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${i + 1}.png)`,
                                backgroundSize: 'contain, cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="h-full w-full flex items-center pl-16 md:pl-36 text-white">
                                <div className="space-y-6">
                                    <h1 className="text-2xl md:text-5xl font-bold">{banner.title}</h1>
                                    <p>{banner.description}</p>
                                    <button className="btn btn-primary me-2">Explore</button>
                                    <button className="btn btn-warning btn-outline">Whats New</button>
                                </div>
                            </div>
                            <div className="absolute flex justify-between bottom-12 right-12">
                                <a href={banner.prev} className="btn btn-circle mr-4">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Banner;