import React from 'react';
import { features } from './FeaturesData';
import FeaturesCard from './FeaturesCard';

const Features = () => {
    return (
        <div className="my-40">
            <div className="text-center space-y-4">
                <h4 className="text-primary font-bold text-xl">Core Features</h4>
                <h1 className="text-4xl font-bold">Why Choose Us</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 mt-12 p-1">
                {
                    features?.map((feature, i) =>
                        <FeaturesCard
                            key={feature._id}
                            feature={feature}
                            i={i}
                        />)
                }
            </div>
        </div>
    );
};

export default Features;