import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, features: [
            'awesome features', 
            'only one member can use', 
            'hudai features', 
            'will never use features',
            'ajaira features'
        ]},
        {id: 2, name: 'Medium', price: 49.99, features: [
            'everyThing on Free',
            'awesome features', 
            'only one member can use', 
            'hudai features', 
            'will never use features',
            'ajaira features'
        ]},
        {id: 3, name: 'Platinum', price: 99.99, features: [
            'everyThing on inCluded',
            'awesome features', 
            'only one member can use', 
            'hudai features', 
            'will never use features',
            'ajaira features'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-600 text-white py-5'>this is pricing js</h2>
            <div className='grid md:grid-cols-3 m-3 gap-6'>
                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;