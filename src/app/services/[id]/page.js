import { getServicesDetails } from '@/services/getServices';
import React from 'react';

const page = async ({params}) => {
    const details = await getServicesDetails(params.id);
    return (
        <div>
            {details._id}
        </div>
    );
};

export default page;