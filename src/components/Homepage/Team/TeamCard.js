import Image from 'next/image';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";


const TeamCard = ({ team }) => {
    const { name, image, role, social } = team;
    return (
        <div className="card border">
            <figure className="px-10 pt-10">
                <Image
                    src={image}
                    alt={name}
                    className="rounded-xl w-full h-[300px] " height={300} width={300} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{role}</p>
                <div className="card-actions justify-end">

                    {
                        social?.map((s, i) =>
                            <a href={`${(s.facebook && s.facebook) || (s.linkedin && s.linkedin) || (s.discord && s.discord)}`} key={i} className="btn btn-circle text-4xl">
                                {
                                    (s.facebook && <FaFacebook />) || (s.linkedin && <TiSocialLinkedinCircular />) || (s.discord && <FaDiscord />)
                                }
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamCard;