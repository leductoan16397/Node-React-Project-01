import React, { useState, useEffect } from 'react';
import axios from 'axios'
import InfomationHeader from './infomationHeader';
import DealsOfWeek from './dealsOfWeek';
import ProductContainer from './productContainer';

export default function Home() {
    const [greeting, setGreeting] = useState('')

    useEffect(() => {
        axios.get('/home').then(result => {
            setGreeting(result.data);
        })
    }, [])

    return (
        <div className="App">
            <div>
                <InfomationHeader />
                <h2>{greeting}</h2>
            </div>

            <div>
                <ProductContainer />
            </div>

            <div>
                <DealsOfWeek />
            </div>
        </div>
    )
}