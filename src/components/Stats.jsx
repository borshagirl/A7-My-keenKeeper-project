
import React from 'react';

const Stats = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='p-6 rounded-md shadow-lg text-center'>
                <h2 className='font-bold text-xl'>10</h2>
                <p className='text-gray-500'>Total Friends</p>
            </div>
            <div className='p-6 rounded-md shadow-lg text-center'>
                <h2 className='font-bold text-xl'>3</h2>
                <p className='text-gray-500'>On Track</p>
            </div>
            <div className='p-6 rounded-md shadow-lg text-center'>
                <h2 className='font-bold text-xl'>6</h2>
                <p className='text-gray-500'>Need Attention</p>
            </div>
            <div className='p-4 rounded-md shadow-lg text-center'>
                <h2 className='font-bold text-xl'>12</h2>
                <p className='text-gray-500'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Stats;