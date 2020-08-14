import React, { useState, useEffect } from 'react';
import axios from 'axios'
import WhyGoWithAnipat from '../element/whyGoWithAnipat';
import OurTeam from '../element/ourTeam';
import PetCare from '../element/petCare';
import Adopt from '../element/adoptInfo';
import Testmonial from '../element/testmonial';
import AboutHeader from '../element/headerAbout';

export default function About() {

    return (
        <div className="About">
            <AboutHeader />
            <PetCare />
            <Adopt />
            <Testmonial />
            <OurTeam />
            <WhyGoWithAnipat />
        </div>
    )
}