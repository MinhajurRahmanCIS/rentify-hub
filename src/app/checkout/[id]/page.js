import DetailsBanner from '@/components/Shared/DetailsBanner/DetailsBanner';
import Checkout from '@/components/Checkoutpage/Checkout/Checkout';

import React from 'react';

const page = () => {

    return (
        <div className="container mx-auto">
            <DetailsBanner
                details={{ _id: 783678, title: "Checkout", img: "https://www.shutterstock.com/image-photo/online-ecommerce-shopping-checkout-on-600nw-1977696398.jpg" }}
            />

            <div className="">
                <Checkout/>
            </div>
        </div>
    );
};

export default page;