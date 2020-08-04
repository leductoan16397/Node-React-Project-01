import React from 'react';

export default function ProductContainer() {
    const show = () => {
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return a.map(value => {
            return (
                <div className="col-4" key={value}><h1>Item {value}</h1></div>
            )
        })

    }
    return (
        <div className="product-container row">
            {show()}
        </div>
    )
}