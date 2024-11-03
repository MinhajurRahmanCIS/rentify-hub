import ServiceDetails from '@/components/ServicePage/ServiceDetails/ServiceDetails';
import DetailsBanner from '@/components/Shared/DetailsBanner/DetailsBanner';
import { getServicesDetails } from '@/services/getServices';
import React from 'react';

const page = async ({ params }) => {
    const { id } = await params; //params need to be await
    const details = await getServicesDetails(id);
    return (
        <div className="container mx-auto">
            <DetailsBanner
                details={{ _id: details._id, title: details.title, img: details.img }}
            />
            <ServiceDetails
                details={details}
            />
        </div>
    );
};

export default page;