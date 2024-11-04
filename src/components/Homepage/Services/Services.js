import React from 'react';
import ServiceCard from './ServiceCard';
import { getServices } from '@/services/getServices';
import Link from 'next/link';

const Services = async () => {
    const services = await getServices();
    return (
        <div className="my-20">
            <div className="text-center space-y-4">
                <h4 className="text-primary font-bold text-xl"><span className="text-3xl text-orange-600">Rent</span> Service</h4>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomized <br />words which don not look even slightly believable.</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-1">
                {
                    services?.length > 0 &&
                    services?.slice(0, 6)?.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        />)
                }
            </div>

            <div className="flex justify-center items-center my-8">
                <Link href="/services" className="btn btn-primary btn-outline">More Services</Link>
            </div>
        </div>
    );
};

export default Services;