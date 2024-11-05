import ServiceDetails from '@/components/ServicePage/ServiceDetails/ServiceDetails';
import DetailsBanner from '@/components/Shared/DetailsBanner/DetailsBanner';
import { getServicesDetails } from '@/services/getServices';
import React from 'react';

export const generateMetadata = async ({ params }) => {
    const { id } = await params; //params need to be await
    const details = await getServicesDetails(id);
    
    return {
        title: `${details?.title} Details`,
        description: details?.description,
        keywords: "Brand : " +  details.brand + ", Category : " + details.category + ","+ details?.configuration?.map(c => " " + c.option + " : " + c.value)
    }
}

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