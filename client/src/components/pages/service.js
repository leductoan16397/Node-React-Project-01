import React from 'react';
import Header from '../element/header';
import Testmonial from '../element/testmonial';
import OurTeam from '../element/ourTeam';
import WhyGoWithAnipat from '../element/whyGoWithAnipat';
import Adopt from '../element/adoptInfo';
import PetCare from '../element/petCare';
import ServiceForEveryDog from '../element/serviceForEveryDog';

export default function Service() {
    return (
        <div className="service">
            <Header tittle={"service"} />
            <ServiceForEveryDog />
            <Testmonial />
            <Adopt />
            <OurTeam />
            <WhyGoWithAnipat />
        </div>
    )
}