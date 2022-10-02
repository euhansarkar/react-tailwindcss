import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center justify-center'>
                <CheckCircleIcon className="h-6 text-xl w-6 text-blue-500"/>
                <p className='ml-2 text-xl'>{feature}</p>
        </div>
    );
};

export default Feature;