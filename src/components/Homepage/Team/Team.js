import React from 'react';
import TeamCard from './TeamCard';
import { teams } from './TeamData';

const Team = () => {
    return (
        <div className="my-20">
            <div className="text-center space-y-4">
                <h4 className="text-primary font-bold text-xl">Team</h4>
                <h1 className="text-4xl font-bold">Why Choose Us</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomized <br />words which don not look even slightly believable. </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-1">
                {
                    teams?.map(team =>
                        <TeamCard
                            key={team._id}
                            team={team}
                        />)
                }
            </div>
        </div>
    );
};

export default Team;