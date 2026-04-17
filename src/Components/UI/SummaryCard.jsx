import React from 'react';

const SummaryCard = ( {stat, title} ) => {
    return (
        <div className='text-center space-y-2 border border-gray-300 rounded-2xl py-4'>
            <p className='text-2xl md:text-4xl font-semibold text-[#244D3F]'>{stat}</p>
            <p className='text-[#64748B]'>{title}</p>
        </div>
    );
};

export default SummaryCard;