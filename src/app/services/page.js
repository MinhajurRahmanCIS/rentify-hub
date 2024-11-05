import ServiceCard from '@/components/Homepage/Services/ServiceCard';
import { getServices } from '@/services/getServices';
import Link from 'next/link';
import React from 'react';

const page = async () => {
    const services = await getServices();
    return (
        <div className="my-10">
            <div className="text-center space-y-4">
                <h4 className="text-primary font-bold text-3xl"><span className="text-3xl text-orange-600">Rent</span> Service</h4>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 p-1">
                {
                    services?.length > 0 &&
                    services?.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        />)
                }
            </div>
        </div>
    );
};

export default page;