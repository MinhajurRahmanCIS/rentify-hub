import { services } from '@/lib/services';
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div className="my-8">
            <div className="text-center space-y-4">
                <h4 className="text-primary font-bold text-xl">Service</h4>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomized <br />words which don not look even slightly believable.</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {
                    services?.slice(0,6)?.map(service => 
                    <ServiceCard
                    key={service._id}
                    service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;