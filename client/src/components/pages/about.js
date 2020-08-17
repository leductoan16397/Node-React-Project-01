import React from 'react';
import WhyGoWithAnipat from '../element/whyGoWithAnipat';
import OurTeam from '../element/ourTeam';
import PetCare from '../element/petCare';
import Adopt from '../element/adoptInfo';
import Testmonial from '../element/testmonial';
import Header from '../element/header';

export default function About() {
    return (
        <div className="About">
            <Header tittle={"About Us"} />
            <PetCare />
            <Adopt />
            <Testmonial />
            <OurTeam />
            <WhyGoWithAnipat />
        </div>
    )
}