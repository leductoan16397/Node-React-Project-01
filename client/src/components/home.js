import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Breadcrumb from './breadcrumb';
import InfomationHeader from './infomationHeader';
import InfomationFooter from './infomationFooter';
import Filter from './filter';
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
                <Breadcrumb />
                <InfomationHeader />
            </div>

            <div>
                <Filter />
            </div>

            <div>
                <ProductContainer />
            </div>

            <div>
                <InfomationFooter />
            </div>
        </div>
    )
}