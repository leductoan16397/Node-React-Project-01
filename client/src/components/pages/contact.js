import React from 'react';
import Header from '../element/header';
import GoogleMap from '../element/contact/googleMap';
import GetInTouch from '../element/contact/getInTouch';

export default function Contact() {
    return (
        <div className="contact">
            <Header tittle={"Contact"} />
            <div className="container">
                <GoogleMap />
                <GetInTouch />
            </div>
        </div>
    )
}