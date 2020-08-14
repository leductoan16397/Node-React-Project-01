import React, { useState, useEffect } from 'react';
import axios from 'axios'
import InfomationHeader from '../element/infomationHeader';
import WhyGoWithAnipat from '../element/whyGoWithAnipat';
import ServiceForEveryDog from '../element/serviceForEveryDog';
import OurTeam from '../element/ourTeam';
import PetCare from '../element/petCare';
import Adopt from '../element/adoptInfo';
import Testmonial from '../element/testmonial';

export default function Home() {
    const [greeting, setGreeting] = useState('')

    useEffect(() => {
        axios.get('/home').then(result => {
            setGreeting(result.data);
        })
    }, [])

    return (
        <div className="Home">
            <InfomationHeader />
            <ServiceForEveryDog />
            <PetCare />
            <Adopt />
            <Testmonial />
            <OurTeam />
            <WhyGoWithAnipat />
        </div>
    )
}