import React from 'react';
import Feature from '../../Feature/Feature';

const PriceOption = ({option}) => {
    const {features} = option
    return (
        <div className='bg-slate-600 text-white gap-7 rounded-md mt-4'>
            <div>
            <h2><span className='text-7xl font-bold'>{option.price}</span><span className='text-2xl font-medium text-gray-300'>/per month</span></h2>
            <p className='text-3xl font-semibold my-3'>{option.name}</p>
            </div>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            <button className='bg-amber-500 w-5/6 p-1 my-2 rounded-xl bottom-2 font-bold hover:bg-red-400'>buy now</button>
        </div>
        
    );
};

export default PriceOption;